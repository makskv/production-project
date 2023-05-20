import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one param', () => {
        const expectedResult = 'someClass';

        const result = classNames('someClass');
        expect(result).toBe(expectedResult);
    });

    test('with additional params', () => {
        const expectedResult = 'someClass anotherClass testClass';

        const result = classNames(
            'someClass',
            {},
            ['anotherClass', 'testClass'],
        );
        expect(result).toBe(expectedResult);
    });

    test('with additional params and mods', () => {
        const expectedResult = 'someClass anotherClass testClass';

        const result = classNames(
            'someClass',
            {},
            ['anotherClass', 'testClass'],
        );
        expect(result).toBe(expectedResult);
    });

    test('with mods', () => {
        const expectedResult = 'someClass anotherClass modeClass1 modeClass2';

        const result = classNames(
            'someClass',
            { modeClass1: true, modeClass2: true },
            ['anotherClass'],
        );
        expect(result).toBe(expectedResult);
    });

    test('with mods false', () => {
        const expectedResult = 'someClass modeClass1';

        const result = classNames(
            'someClass',
            { modeClass1: true, modeClass2: false },
        );
        expect(result).toBe(expectedResult);
    });

    test('with mods undefined', () => {
        const expectedResult = 'someClass modeClass1';

        const result = classNames(
            'someClass',
            { modeClass1: true, modeClass2: undefined },
        );
        expect(result).toBe(expectedResult);
    });
});
