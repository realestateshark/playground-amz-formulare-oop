import { PersonId } from './person-id'
import { UuidV4 } from './uuid-v4'

describe('PersonId', () => {
    test('get uuidV5', () => {
        const classicPersonId = 1
        const classicMandantId = 1234567
        const personNamespace = new UuidV4('ddf10a1d-ff0b-4437-91f3-455a1246db54')

        const personId = new PersonId(
            classicPersonId,
            classicMandantId,
            personNamespace
        )

        expect(personId.uuidV5.string).toBe('4ea989e9-9007-5fe9-831a-9e152c649173')
    })
})