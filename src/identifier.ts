import * as jsonschema from "jsonschema"

export const schema: jsonschema.Schema = {
  $schema: `http://json-schema.org/draft-04/schema#`,
  description: `An invariant identifier which is usually unique to a set.`,
  type: `string`,
  pattern: `^[_a-z0-9]*$`,
  minLength: 6,
  maxLength: 6
}

export type Type = string
