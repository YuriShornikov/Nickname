import Validator from "../app";

describe('regularly', () => {
    const reg = new Validator();
    test('correct rules', () => {
        expect(reg.validateUsername('Pokemon-111')).toBe(true);
    })
    test('uncorrect rules', () => {
        expect(reg.validateUsername('Pokemon-1111')).toBe(false);
    })
})