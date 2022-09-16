import { Person } from "./person";

export class PersonPool {
    constructor() {

    }

    person(id: string) {
        return new Person()
    }
}