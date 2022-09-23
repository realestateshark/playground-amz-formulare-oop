import { validate, version } from 'uuid';
import { InvalidUuidError } from './invalid-uuid-exception';

export class UuidV4 {
    id: string;

    constructor(id: string) {
        if (!validate(id) || version(id) !== 4) {
            throw new InvalidUuidError('invalid UUID v4 with "' + id + '"')
        }
        this.id = id
    }

    get string() {
        return this.id
    }
}