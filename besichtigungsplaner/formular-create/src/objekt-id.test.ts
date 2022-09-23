import { ObjektId } from './objekt-id';
import { Uuid } from './uuid';

describe('ObjektId', () => {
    test('get uuidV5', () => {
        const expectedUuidV5 = '4ea989e9-9007-5fe9-831a-9e152c649173'
        const uuidV4 = 'ddf10a1d-ff0b-4437-91f3-455a1246db54'
        const classicObjektId = 1
        const classicMandantenId = 1234567
        const objekteNamespace = new Uuid(uuidV4)

        const objektId = new ObjektId(
            classicObjektId,
            classicMandantenId,
            objekteNamespace
        )

        expect(objektId.uuidV5.string).toBe(expectedUuidV5)
    })
})