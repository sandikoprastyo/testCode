import find_common_slot from "./testCase2";

describe('test case 2', () => {
    test('case 1', () => {
        const input = [[[9, 12], [14, 16]], [[10, 12], [15, 17]], [[11, 13], [16, 18]]];
        expect(find_common_slot(input)).toBe([11,12])
    });

    test('case 2', () => {
        const input = [[8, 10], [12, 14], [9, 11]];
        expect(find_common_slot(input)).toBe(["No common slot available"])
    });
    
});
