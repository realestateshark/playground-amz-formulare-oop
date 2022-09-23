import { InvalidUuidError } from './invalid-uuid-exception'
import { UuidV4 } from './uuid-v4'

describe('uuidV4', () => {
    test('get uuidV4', () => {
        const uuidV4 = new UuidV4(
            'ddf10a1d-ff0b-4437-91f3-455a1246db54'
        )

        expect(uuidV4.string).toBe('ddf10a1d-ff0b-4437-91f3-455a1246db54')
    })

    test('wrong uuid version', () => {

        const uuidV1 = '4ff35b2e-3b4a-11ed-a0dd-fb47d549ea4a'
        expect(() => {
            return new UuidV4(uuidV1)
        }).toThrowError(InvalidUuidError)
    })

    test('invaild uuid', () => {

        expect(() => {
            return new UuidV4(
                'invaild uuid'
            )
        }).toThrowError(InvalidUuidError)
    })
})