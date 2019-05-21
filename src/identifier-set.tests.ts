import "jasmine"
import * as identifierSet from "./identifier-set"
import * as shared from "./shared.tests"

describe(`identifier set`, () => {
  shared.run(shared.exhaustiveIdentifierStrings, value => shared.accepts<identifierSet.Type>(identifierSet.schema, [value]))
  shared.run(shared.emptyArrays, value => shared.accepts<identifierSet.Type>(identifierSet.schema, value))
  shared.run(shared.nonIdentifierStrings, value => shared.rejects(identifierSet.schema, [value]))
  shared.run(shared.nonStrings, value => shared.rejects(identifierSet.schema, [value]))
  shared.run(shared.nonArrays, value => shared.rejects(identifierSet.schema, value))
  describe(`multiple identifiers`, () => shared.accepts(identifierSet.schema, [`for_eg`, `val_id`, `like__`, `__this`]))
  describe(`duplicate identifiers`, () => shared.rejects(identifierSet.schema, [`for_eg`, `val_id`, `like__`, `val_id`, `__this`]))
})
