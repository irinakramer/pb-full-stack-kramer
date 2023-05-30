const ApplicationHelper = {
  // Get year in 4-digit format
  getYear: (data) => new Date(data).getFullYear(),

  // Get month in 1 or 2 digit format
  getMonth: (data) => new Date(data).getMonth(),

  // Iterate data from API, parsing UTC date into year and month
  parseData: (data) => {
    const { getYear, getMonth } = ApplicationHelper;

    if (!data) return [];

    return data.map(({ commonname, evt_datetime_utc, observationcount }) => ({
      commonname,
      observationcount,
      year: getYear(evt_datetime_utc),
      month: getMonth(evt_datetime_utc),
    }));
  },

  // Get list of species to be used in Species selector
  getSpecies: (data) => {
    if (!data) return [];

    return data.reduce((acc, curr) => {
      if (!acc.includes(curr?.commonname)) {
        return [...acc, curr?.commonname];
      }

      return acc.sort();
    }, []);
  },

  // Get list of year to be used in Years selector
  getYears: (data) => {
    if (!data) return [];

    return data.reduce((acc, curr) => {
      if (!acc.includes(curr?.year)) {
        return [...acc, curr?.year];
      }

      return acc;
    }, []);
  },

  MONTHS: [
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

  // Generate array of objects with 12 months and initial observation count of 0
  initGraphData: (MONTHS) =>
    MONTHS.map((month) => ({ month, observationcount: 0 })),

  // Based on user input of common name and year, populate graph array
  // with observation count for each month of that year
  calculateGraphData: (sightings, commonname, year) => {
    const { MONTHS, initGraphData } = ApplicationHelper;
    const graphData = initGraphData(MONTHS);

    sightings.forEach((sighting) => {
      if (sighting?.year === year && sighting?.commonname === commonname) {
        graphData[sighting?.month].observationcount +=
          sighting?.observationcount;
      }
    });

    return graphData;
  },

  // If no sightings were recorded return true.
  // If at least one sighting was recorded return false.
  isZeroCount: (data) => {
    if (data.length) return !data.find((el) => el?.observationcount !== 0);
  },
};

export default ApplicationHelper;
