import { PersonPool } from "./person-pool";

const pool = new PersonPool()
const person = pool.person('74738ff5-5367-5958-9aee-98fffdcd1876')
console.log(person.anrede())