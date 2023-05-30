import ApplicationHelper from '../../helpers/ApplicationHelper';
const { parseData, getSpecies, getYears, calculateGraphData, isZeroCount } =
  ApplicationHelper;

const data = [
  {
    commonname: 'Unidentified Whale',
    evt_datetime_utc: '2013-11-26T20:44:18+00:00',
    observationcount: 1,
  },
  {
    commonname: 'Humpback Whale',
    evt_datetime_utc: '2013-11-26T21:14:29+00:00',
    observationcount: 2,
  },
  {
    commonname: 'Humpback Whale',
    evt_datetime_utc: '2013-11-26T20:23:07+00:00',
    observationcount: 1,
  },
];

const sightings = [
  {
    commonname: 'Unidentified Whale',
    month: 10,
    observationcount: 1,
    year: 2013,
  },
  {
    commonname: 'Humpback Whale',
    month: 10,
    observationcount: 2,
    year: 2013,
  },
  {
    commonname: 'Humpback Whale',
    month: 11,
    observationcount: 1,
    year: 2013,
  },
];

describe('parseData', () => {
  it('returns empty array', () => {
    const data = undefined;

    expect(getSpecies(data).length).toBe(0);
  });

  it('returns array with 3 elements', () => {
    expect(Array.isArray(parseData(data))).toBe(true);
    expect(parseData(data).length).toBe(3);
  });
});

describe('getSpecies', () => {
  it('returns empty array', () => {
    const data = undefined;

    expect(getSpecies(data).length).toBe(0);
  });

  it('returns array with 2 elements', () => {
    const data = sightings;

    expect(Array.isArray(getSpecies(data))).toBe(true);
    expect(getSpecies(data).length).toBe(2);
  });
});

describe('getYears', () => {
  it('returns empty array', () => {
    const data = undefined;

    expect(getYears(data).length).toBe(0);
  });

  it('returns array with 1 element', () => {
    const data = sightings;

    expect(Array.isArray(getYears(data))).toBe(true);
    expect(getYears(data).length).toBe(1);
  });
});

describe('calculateGraphData', () => {
  it('returns array with 12 elements', () => {
    const commonname = 'Humpback Whale';
    const year = 2023;

    expect(Array.isArray(calculateGraphData(sightings, commonname, year))).toBe(
      true
    );
    expect(calculateGraphData(sightings, commonname, year).length).toBe(12);
  });
});

describe('isZeroCount', () => {
  it('returns true', () => {
    const data = [
      { month: 'Jan', observationcount: 0 },
      { month: 'Feb', observationcount: 0 },
      { month: 'Mar', observationcount: 0 },
    ];

    expect(isZeroCount(data)).toBe(true);
  });

  it('returns false', () => {
    const data = [
      { month: 'Jan', observationcount: 0 },
      { month: 'Feb', observationcount: 0 },
      { month: 'Mar', observationcount: 1 },
    ];

    expect(isZeroCount(data)).toBe(false);
  });

  it('returns undefined', () => {
    const data = [];

    expect(isZeroCount(data)).toBe(undefined);
  });
});
