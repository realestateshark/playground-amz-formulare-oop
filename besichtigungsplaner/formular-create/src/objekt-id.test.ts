import { InvalidUuidError } from './invalid-uuid-exception';
import { ObjektId } from './objekt-id';

describe('ObjektId', () => {
    test('get uuidV5', () => {
        const classicObjektId = '1'
        const classicMandantenId = '1234567'
        const objekteNamespaceUuid = 'ddf10a1d-ff0b-4437-91f3-455a1246db54'

        const objektId = new ObjektId(
            classicObjektId,
            classicMandantenId,
            objekteNamespaceUuid
        )

        expect(objektId.uuidV5).toBe('4ea989e9-9007-5fe9-831a-9e152c649173')
    });

    test('invalid objektNamespaceUuid', () => {
        const classicObjetkId = '1'
        const classicMandantId = '1234567'
        const objektNamespaceUuid = 'invalid uuid'

        expect(() => {
            return new ObjektId(
                classicObjetkId,
                classicMandantId,
                objektNamespaceUuid
            )
        }).toThrowError(InvalidUuidError)
    })
})