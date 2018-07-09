import moment from 'moment';

export const DAYS_OF_WEEK = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};

const createMomentRange = hours =>
    hours.map(({ opensAt, closesAt }) => ({
        opensAt: moment().set({ minute: 0, second: 0, millisecond: 0, ...opensAt }),
        closesAt: moment().set({ minute: 0, second: 0, millisecond: 0, ...closesAt }),
    }));

export const TWR_HOURS = [DAYS_OF_WEEK.TUESDAY, DAYS_OF_WEEK.WEDNESDAY, DAYS_OF_WEEK.THURSDAY].reduce((hours, day) => {
    hours[day] = createMomentRange([
        {
            opensAt: { day, hour: 11 },
            closesAt: { day, hour: 14, minute: 30 },
        },
        {
            opensAt: { day, hour: 16 },
            closesAt: { day, hour: 21 },
        },
    ]);

    return hours;
}, {});

export const HOURS = {
    ...TWR_HOURS,
    [DAYS_OF_WEEK.SUNDAY]: createMomentRange([
        {
            opensAt: { day: DAYS_OF_WEEK.SUNDAY, hour: 14 },
            closesAt: { day: DAYS_OF_WEEK.SUNDAY, hour: 20 },
        },
    ]),
    [DAYS_OF_WEEK.MONDAY]: createMomentRange([
        {
            opensAt: { day: DAYS_OF_WEEK.MONDAY, hour: 16 },
            closesAt: { day: DAYS_OF_WEEK.MONDAY, hour: 21 },
        },
    ]),
    [DAYS_OF_WEEK.FRIDAY]: createMomentRange([
        {
            opensAt: { day: DAYS_OF_WEEK.FRIDAY, hour: 11 },
            closesAt: { day: DAYS_OF_WEEK.FRIDAY, hour: 14, minute: 30 },
        },
        {
            opensAt: { day: DAYS_OF_WEEK.FRIDAY, hour: 15 },
            closesAt: { day: DAYS_OF_WEEK.FRIDAY, hour: 22 },
        },
    ]),
    [DAYS_OF_WEEK.SATURDAY]: createMomentRange([
        {
            opensAt: { day: DAYS_OF_WEEK.SUNDAY, hour: 12 },
            closesAt: { day: DAYS_OF_WEEK.SUNDAY, hour: 22 },
        },
    ]),
};

export const getTodaysSchedule = () => HOURS[moment().day()];
