import { v5, validate } from 'uuid';
import { InvalidUuidError } from './invalid-uuid-exception';

export class PersonId {
    private classicPersonId: string
    private classicMandantId: string
    private personNamespaceUuid: string

    constructor(classicPersonId: string, classicMandantId: string, personNamespaceUuid: string) {

        if (!validate(personNamespaceUuid)) {
            throw new InvalidUuidError('invalid personNamespaceUuid parameter with ' + personNamespaceUuid)
        }

        this.classicPersonId = classicPersonId
        this.classicMandantId = classicMandantId
        this.personNamespaceUuid = personNamespaceUuid
    }

    get uuidV5() {
        return v5(
            this.classicMandantId + this.classicPersonId,
            this.personNamespaceUuid
        )
    }
}