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
      evt_datetime_utc,
      observationcount,
      year: getYear(evt_datetime_utc),
      month: getMonth(evt_datetime_utc),
    }));
  },

  getMonthName: (data) => {
    return new Date(data).toLocaleString('en-us', { month: 'long' });
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
};

export default ApplicationHelper;
