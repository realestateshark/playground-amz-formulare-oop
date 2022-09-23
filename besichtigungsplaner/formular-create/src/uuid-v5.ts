import { validate, version } from 'uuid';
import { InvalidUuidError } from './invalid-uuid-exception';
import { UuidV5Interface } from './uuid-v5-interface';

export class UuidV5 implements UuidV5Interface {
    id: string;

    constructor(id: string) {
        if (!validate(id) || version(id) !== 5) {
            throw new InvalidUuidError('invalid uuid v5 with "' + id + '"')
        }
        this.id = id
    }

    get string() {
        return this.id
    }
}