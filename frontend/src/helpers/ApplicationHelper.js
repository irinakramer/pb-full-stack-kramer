const ApplicationHelper = {
  getYear: (data) => {
    return new Date(data).getFullYear();
  },

  getMonth: (data) => {
    return new Date(data).getMonth();
  },

  parseData: (data) => {
    const { getYear, getMonth } = ApplicationHelper;

    return data.map(({ commonname, evt_datetime_utc, observationcount }) => ({
      commonname,
      observationcount,
      year: getYear(evt_datetime_utc),
      month: getMonth(evt_datetime_utc),
    }));
  },

  getSpecies: (data) => {
    if (!data) return [];

    return data.reduce((acc, curr) => {
      if (!acc.includes(curr.commonname)) {
        return [...acc, curr.commonname];
      }
      return acc.sort();
    }, []);
  },

  getYears: (data) => {
    if (!data) return [];

    return data.reduce((acc, curr) => {
      if (!acc.includes(curr.year)) {
        return [...acc, curr.year];
      }
      return acc;
    }, []);
  },

  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  initGraphData: (months) => {
    return months.map((month) => ({ month, observationcount: 0 }));
  },

  calculateGraphData: (sightings, commonname, year) => {
    const { months, initGraphData } = ApplicationHelper;
    const graphData = initGraphData(months);

    sightings.forEach((sighting) => {
      if (sighting.year === year && sighting.commonname === commonname) {
        graphData[sighting.month].observationcount += sighting.observationcount;
      }
    });

    return graphData;
  },

  isZeroCount: (data) => {
    if (data.length) return !data.find((el) => el.observationcount !== 0);
  },
};

export default ApplicationHelper;
