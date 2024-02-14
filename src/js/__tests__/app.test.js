import Validator from "../app";

describe('regularly', () => {
    const reg = new Validator();
    test('latin symbols', () => {
        expect(reg.validateUsername('Pokemon')).toBe(true);
    })
    test('3 num', () => {
        expect(reg.validateUsername('Pokemon111nnn')).toBe(true);
    })
    test('- in the word', () => {
        expect(reg.validateUsername('Pokemon-nnn')).toBe(true);
    })
    test('_ in the word', () => {
        expect(reg.validateUsername('Pokemon_nnn')).toBe(true);
    })
    test('russian symbol - false', () => {
        expect(reg.validateUsername('йPokemon')).toBe(false);
    })
    test('uncorrect rules 4 num', () => {
        expect(reg.validateUsername('Pokemon1111n')).toBe(false);
    })
    test('num in the end word', () => {
        expect(reg.validateUsername('Pokemon1')).toBe(false);
    })
    test('num at the beginning', () => {
        expect(reg.validateUsername('1Pokemon')).toBe(false);
    })
    test('_ at the beginning', () => {
        expect(reg.validateUsername('_Pokemon')).toBe(false);
    })
    test('_ in the and', () => {
        expect(reg.validateUsername('Pokemon_')).toBe(false);
    })
    test('- in the and', () => {
        expect(reg.validateUsername('Pokemon-')).toBe(false);
    })
    test('- at the beginning', () => {
        expect(reg.validateUsername('-Pokemon')).toBe(false);
    })
})