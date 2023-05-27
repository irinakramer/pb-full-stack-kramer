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
  calculateGraphData: (data, commonname, year) => {
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
};

export default ApplicationHelper;
