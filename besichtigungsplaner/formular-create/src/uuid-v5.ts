import { v5 } from 'uuid';
import { UuidInterface } from './uuid-interface';
import { UuidV5Interface } from './uuid-v5-interface';

export class UuidV5 implements UuidV5Interface {
    name: string;
    namespace: UuidInterface;

    constructor(name: string, namespace: UuidInterface) {

        this.namespace = namespace
        this.name = name
    }

    get string(): string {
        return v5(
            this.name,
            this.namespace.string
        )
    }
}