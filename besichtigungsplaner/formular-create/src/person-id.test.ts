import { PersonId } from './person-id'
import { Uuid } from './uuid'

describe('PersonId', () => {
    test('get uuidV5', () => {
        const expectedUuidV5 = '4ea989e9-9007-5fe9-831a-9e152c649173'
        const uuidV4 = 'ddf10a1d-ff0b-4437-91f3-455a1246db54'
        const classicPersonId = 1
        const classicMandantId = 1234567
        const personNamespace = new Uuid(uuidV4)

        const personId = new PersonId(
            classicPersonId,
            classicMandantId,
            personNamespace
        )

        expect(personId.uuidV5.string).toBe(expectedUuidV5)
    })
})