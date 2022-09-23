import { validate, version } from 'uuid';
import { InvalidUuidError } from './invalid-uuid-exception';
import { UuidV4Interface } from './uuid-v4-interface';

export class UuidV4 implements UuidV4Interface {
    id: string;

    constructor(id: string) {
        if (!validate(id) || version(id) !== 4) {
            throw new InvalidUuidError('invalid uuid v4 with "' + id + '"')
        }
        this.id = id
    }

    get string() {
        return this.id
    }
}