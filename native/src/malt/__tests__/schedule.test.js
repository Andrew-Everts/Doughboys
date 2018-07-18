import { DAYS_OF_WEEK, SCHEDULE, TWR_SCHEDULE } from 'doughboys-native/src/malt/schedule';

describe('SCHEDULE', () => {
    it('has schedule for each day of week', () => {
        expect(Object.keys(SCHEDULE).map(Number)).toEqual(Object.keys(DAYS_OF_WEEK).map(i => DAYS_OF_WEEK[i]));
    });

    it('includes tuesday through thursday schedule', () => {
        expect(SCHEDULE).toEqual(expect.objectContaining(TWR_SCHEDULE));
    });
});

describe('TWR_SCHEDULE', () => {
    it('initializes schedule for tuesday through thursday', () => {
        expect(Object.keys(TWR_SCHEDULE).map(Number)).toEqual([DAYS_OF_WEEK.TUESDAY, DAYS_OF_WEEK.WEDNESDAY, DAYS_OF_WEEK.THURSDAY]);
    });
});
