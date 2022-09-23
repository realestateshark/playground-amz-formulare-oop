import { validate, version } from 'uuid';
import { InvalidUuidError } from './invalid-uuid-exception';
import { UuidInterface } from './uuid-interface';

export class Uuid implements UuidInterface {
    id: string;

    constructor(id: string) {
        if (!validate(id)) {
            throw new InvalidUuidError('invalid uuid with "' + id + '"')
        }
        this.id = id
    }

    get string() {
        return this.id
    }

    get version(): number {
        return version(this.id)
    }
}