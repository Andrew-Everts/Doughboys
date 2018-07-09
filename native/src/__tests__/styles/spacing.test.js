import SpacingSheet from 'doughboys-native/src/styles/spacing';

describe('SpacingSheet', () => {
    it('defines 7 tiers of spacing in all directions', () => {
        [0, 1, 2, 3, 4, 5, 6].forEach(index => {
            expect(SpacingSheet[`pa${index}`]).toBeDefined();
            expect(SpacingSheet[`pt${index}`]).toBeDefined();
            expect(SpacingSheet[`pb${index}`]).toBeDefined();
            expect(SpacingSheet[`pv${index}`]).toBeDefined();
            expect(SpacingSheet[`pl${index}`]).toBeDefined();
            expect(SpacingSheet[`pr${index}`]).toBeDefined();
            expect(SpacingSheet[`ph${index}`]).toBeDefined();

            expect(SpacingSheet[`ma${index}`]).toBeDefined();
            expect(SpacingSheet[`mt${index}`]).toBeDefined();
            expect(SpacingSheet[`mb${index}`]).toBeDefined();
            expect(SpacingSheet[`mv${index}`]).toBeDefined();
            expect(SpacingSheet[`ml${index}`]).toBeDefined();
            expect(SpacingSheet[`mr${index}`]).toBeDefined();
            expect(SpacingSheet[`mh${index}`]).toBeDefined();
        });
    });
});
