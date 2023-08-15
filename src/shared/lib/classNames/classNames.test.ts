import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('className')).toBe('className')
    })
    test('with additional class', () => {
        expect(classNames(
            'className',
            {},
            ['cls1', 'cls2'])
        ).toBe('className cls1 cls2')
    })

    test('with mods true', () => {
        expect(classNames(
            'className',
            { selectable: true, clicked: true },
            ['cls1', 'cls2'])
        ).toBe('className cls1 cls2 selectable clicked')
    })

    test('with mods false', () => {
        expect(classNames(
            'className',
            { selectable: true, clicked: false },
            ['cls1', 'cls2'])
        ).toBe('className cls1 cls2 selectable')
    })

    test('with mods undefined', () => {
        expect(classNames(
            'className',
            { selectable: undefined },
            ['cls1', 'cls2'])
        ).toBe('className cls1 cls2')
    })
})
