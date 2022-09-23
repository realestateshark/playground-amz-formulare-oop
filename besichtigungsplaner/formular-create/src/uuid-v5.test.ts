import { Uuid } from './uuid'
import { UuidV5 } from './uuid-v5'

describe('uuidV5', () => {
    test('get uuidV5', () => {
        const expectedUuidV5 = 'e72449b7-ac48-5e3b-ab17-61a9fc5ce5cc'
        const uuidV4 = 'ddf10a1d-ff0b-4437-91f3-455a1246db54'
        const uuidV5 = new UuidV5(
            'entity-id',
            new Uuid(uuidV4)
        )
        
        expect(uuidV5.string).toBe(expectedUuidV5)
    })
})