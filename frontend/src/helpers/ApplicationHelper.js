const ApplicationHelper = {
  getYear: (data) => {
    return new Date(data).getFullYear();
  },

  getMonth: (data) => {
    return new Date(data).getMonth();
  },

  getMonthName: (data) => {
    return new Date(data).toLocaleString('en-us', { month: 'long' });
  },

  parseData: (data) => {
    const { getYear, getMonthName } = ApplicationHelper;

    return data.map(({ commonname, evt_datetime_utc, observationcount }) => ({
      commonname,
      observationcount,
      year: getYear(evt_datetime_utc),
      month: getMonthName(evt_datetime_utc),
    }));
  },

  getSpecies: (data) => {
    return data.reduce((acc, curr) => {
      if (!acc.includes(curr.commonname)) {
        return [...acc, curr.commonname];
      }
      return acc.sort();
    }, []);
  },

  getYears: (data) => {
    return data.reduce((acc, curr) => {
      if (!acc.includes(curr.year)) {
        return [...acc, curr.year];
      }
      return acc;
    }, []);
  },

  isSameMonth: (arr, obj) => {
    return arr.find(({ month }) => month === obj.month);
  },

  // combine data with same commonname and year
  // sum up observation counts for same month
  combineData: (data, commonname, year) => {
    const { isSameMonth } = ApplicationHelper;

    return data.reduce((acc, curr) => {
      if (curr.year === year && curr.commonname === commonname) {
        const found = isSameMonth(acc, curr);

        if (found) {
          found.observationcount += curr.observationcount;
        } else {
          return [...acc, curr];
        }
      }

      return acc;
    }, []);
  },

  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  // iterate over 12 months and fill in month name for those months with no sightings
  // to be used to show all 12 months inside the graph
  fillEmptyMonths: (data) => {
    const { months } = ApplicationHelper;

    return months.map((month) => {
      const found = data.find((el) => el.month === month);

      if (!found) return { month };
      else return found;
    });
  },

  // final graph data with all months to be shown in the graph
  calculateGraphData: (data, commonname, year) => {
    const { combineData, fillEmptyMonths } = ApplicationHelper;
    const combinedData = combineData(data, commonname, year);

    return fillEmptyMonths(combinedData);
  },
};

export default ApplicationHelper;
