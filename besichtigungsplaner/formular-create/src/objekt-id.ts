import { v5 } from 'uuid';
import { UuidV4Interface } from './uuid-v4-interface';
import { UuidV5 } from './uuid-v5';
import { UuidV5Interface } from './uuid-v5-interface';

export class ObjektId {
    private classicObjektId: number
    private classicMandantenId: number
    private objektNamespace: UuidV4Interface

    constructor(classicObjektId: number, classicMandantenId: number, objektNamespace: UuidV4Interface) {

        this.classicObjektId = classicObjektId
        this.classicMandantenId = classicMandantenId
        this.objektNamespace = objektNamespace
    }

    get uuidV5(): UuidV5Interface {
        return new UuidV5(
            v5(
                `${this.classicMandantenId}${this.classicObjektId}`,
                this.objektNamespace.string
            )
        )
    }
}