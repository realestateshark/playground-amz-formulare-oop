import { InvalidUuidError } from './invalid-uuid-exception'
import { Uuid } from './uuid'

describe('uuid', () => {
    test('get uuid', () => {
        const expectedUuidV4 = 'ddf10a1d-ff0b-4437-91f3-455a1246db54'
        const uuid = new Uuid(expectedUuidV4)

        expect(uuid.string).toBe(expectedUuidV4)
    })

    test('invaild uuid', () => {

        expect(() => {
            return new Uuid(
                'invaild uuid'
            )
        }).toThrowError(InvalidUuidError)
    })
})