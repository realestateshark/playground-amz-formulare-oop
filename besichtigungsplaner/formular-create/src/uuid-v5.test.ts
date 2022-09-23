import { InvalidUuidError } from './invalid-uuid-exception'
import { UuidV5 } from './uuid-v5'

describe('uuidV5', () => {
    test('get uuidV5', () => {
        const uuidV5 = new UuidV5(
            '09d9783c-fb91-50b2-80dc-a23cd49a8da0'
        )

        expect(uuidV5.string).toBe('09d9783c-fb91-50b2-80dc-a23cd49a8da0')
    })

    test('wrong uuid version', () => {

        const uuidV1 = '4ff35b2e-3b4a-11ed-a0dd-fb47d549ea4a'
        expect(() => {
            return new UuidV5(uuidV1)
        }).toThrowError(InvalidUuidError)
    })

    test('invaild uuid', () => {

        expect(() => {
            return new UuidV5(
                'invaild uuid'
            )
        }).toThrowError(InvalidUuidError)
    })
})