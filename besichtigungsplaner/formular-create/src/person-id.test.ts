import { InvalidUuidError } from '../src/invalid-uuid-exception';
import {  PersonId } from './../src/person-id'

describe('PersonId', () => {
    test('get uuidV5', () => {
        const classicPersonId = '1'
        const classicMandantId = '1234567'
        const personNamespaceUuid = 'ddf10a1d-ff0b-4437-91f3-455a1246db54'

        const personId = new PersonId(
            classicPersonId,
            classicMandantId,
            personNamespaceUuid
        )

        expect(personId.uuidV5).toBe('4ea989e9-9007-5fe9-831a-9e152c649173')
    })

    test('invalid personNamespaceUuid', () => {
        const classicPersonId = '1'
        const classicMandantId = '1234567'
        const personNamespaceUuid = 'invalid uuid'

        expect(() => {
            return new PersonId(
                classicPersonId,
                classicMandantId,
                personNamespaceUuid
            )
        }).toThrowError(InvalidUuidError)
    })
})