import { v5, validate } from 'uuid';
import { InvalidUuidError } from './invalid-uuid-exception';

export class ObjektId {
    private classicObjektId: string
    private classicMandantenId: string
    private objektNamespaceUuid: string

    constructor(classicObjektId: string, classicMandantenId: string, objektNamespaceUuid: string) {

        if (!validate(objektNamespaceUuid)) {
            throw new InvalidUuidError('invalid objektNamespaceUuid parameter with ' + objektNamespaceUuid)
        }

        this.classicObjektId = classicObjektId
        this.classicMandantenId = classicMandantenId
        this.objektNamespaceUuid = objektNamespaceUuid
    }

    get uuidV5() {
        return v5(
            this.classicMandantenId + this.classicObjektId,
            this.objektNamespaceUuid
        )
    }
}