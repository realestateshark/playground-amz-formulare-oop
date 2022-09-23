import { UuidInterface } from './uuid-interface';
import { UuidV5 } from './uuid-v5';
import { UuidV5Interface } from './uuid-v5-interface';

export class ObjektId {
    private classicObjektId: number
    private classicMandantenId: number
    private objektNamespace: UuidInterface

    constructor(classicObjektId: number, classicMandantenId: number, objektNamespace: UuidInterface) {

        this.classicObjektId = classicObjektId
        this.classicMandantenId = classicMandantenId
        this.objektNamespace = objektNamespace
    }

    get uuidV5(): UuidV5Interface {
        return new UuidV5(
            `${this.classicMandantenId}${this.classicObjektId}`,
            this.objektNamespace
        )
    }
}