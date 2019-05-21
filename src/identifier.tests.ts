import "jasmine"
import * as identifier from "./identifier"
import * as shared from "./shared.tests"

describe(`identifier`, () => {
  shared.run(shared.exhaustiveIdentifierStrings, value => shared.accepts(identifier.schema, value))
  shared.run(shared.nonIdentifierStrings, value => shared.rejects(identifier.schema, value))
  shared.run(shared.nonStrings, value => shared.rejects(identifier.schema, value))
})
