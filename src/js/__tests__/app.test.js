import Validator from "../app";

describe('test regularly', () => {
    const reg = new Validator();
    test('test correct rules', () => {  
        expect(reg.validateUsername('Pokemon-111')).toBe(true);
    })
    test('test uncorrect rules', () => {
        expect(reg.validateUsername('Pokemon-1111')).toBe(false);
    })
})