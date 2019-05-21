import "jasmine"
import * as localizedString from "./localized-string"
import * as shared from "./shared.tests"

describe(`localized string`, () => {
  shared.run(shared.nonObjects, value => shared.rejects(localizedString.schema, value))
  shared.run(shared.emptyObjects, value => shared.accepts(localizedString.schema, value))
  shared.run(shared.identifierStrings, value => shared.accepts(localizedString.schema, shared.keyValue(value, `Test String`)))
  shared.run(shared.nonIdentifierStrings, value => shared.rejects(localizedString.schema, shared.keyValue(value, `Test String`)))
  shared.run(shared.nonStrings, value => shared.rejects(localizedString.schema, shared.keyValue(`for_eg`, value)))
  describe(`multiple strings`, () => shared.accepts(localizedString.schema, {
    for_eg: `Test String A`,
    oth_id: `Test String B`,
    anther: `Test String C`,
    lastid: `Test String D`
  }))
})
