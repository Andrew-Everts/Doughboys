import { DAYS_OF_WEEK, HOURS, TWR_HOURS } from 'doughboys-malt/hours';

describe('HOURS', () => {
    it('has key for each day of week', () => {
        expect(Object.keys(HOURS).length).toEqual(7);
    });

    it('includes tuesday through thursday hours', () => {
        expect(HOURS).toEqual(expect.objectContaining(TWR_HOURS));
    });
});

describe('TWR_HOURS', () => {
    it('initializes hours for tuesday through thursday', () => {
        expect(Object.keys(TWR_HOURS).map(Number)).toEqual([DAYS_OF_WEEK.TUESDAY, DAYS_OF_WEEK.WEDNESDAY, DAYS_OF_WEEK.THURSDAY]);
    });
});
