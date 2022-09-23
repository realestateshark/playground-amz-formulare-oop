import { UuidInterface } from './uuid-interface'
import { UuidV5 } from './uuid-v5'
import { UuidV5Interface } from './uuid-v5-interface'

export class PersonId {
    private classicPersonId: number
    private classicMandantId: number
    private personNamespace: UuidInterface

    constructor(classicPersonId: number, classicMandantId: number, personNamespace: UuidInterface) {

        this.classicPersonId = classicPersonId
        this.classicMandantId = classicMandantId
        this.personNamespace = personNamespace
    }

    get uuidV5(): UuidV5Interface {
        return new UuidV5(
            `${this.classicMandantId}${this.classicPersonId}`,
            this.personNamespace
        )
    }
}