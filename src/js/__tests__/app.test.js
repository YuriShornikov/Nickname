import Validator from "../app";

describe('regularly', () => {
    const reg = new Validator();
    test('All agreed the symbols', () => {
        expect(reg.validateUsername('Pokemon-111_a')).toBe(true);
    })
    test('russian symbol - false', () => {
        expect(reg.validateUsername('йPokemon-111')).toBe(false);
    })
    test('uncorrect rules', () => {
        expect(reg.validateUsername('Pokemon-1111')).toBe(false);
    })
    test('1 at the beginning', () => {
        expect(reg.validateUsername('1Pokemon-1111')).toBe(false);
    })
    test('_ at the beginning', () => {
        expect(reg.validateUsername('_Pokemon-1111')).toBe(false);
    })
    test('_ in the and', () => {
        expect(reg.validateUsername('Pokemon-1111_')).toBe(false);
    })
    test('- in the and', () => {
        expect(reg.validateUsername('Pokemon-1111-')).toBe(false);
    })
    test('- at the beginning', () => {
        expect(reg.validateUsername('-Pokemon-1111')).toBe(false);
    })
})