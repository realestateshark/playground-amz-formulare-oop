import { v5 } from 'uuid'
import { UuidV4Interface } from './uuid-v4-interface'
import { UuidV5 } from './uuid-v5'
import { UuidV5Interface } from './uuid-v5-interface'

export class PersonId {
    private classicPersonId: number
    private classicMandantId: number
    private personNamespace: UuidV4Interface

    constructor(classicPersonId: number, classicMandantId: number, personNamespace: UuidV4Interface) {

        this.classicPersonId = classicPersonId
        this.classicMandantId = classicMandantId
        this.personNamespace = personNamespace
    }

    get uuidV5(): UuidV5Interface {
        return new UuidV5(
            v5(
                `${this.classicMandantId}${this.classicPersonId}`,
                this.personNamespace.string
            )
        )
    }
}