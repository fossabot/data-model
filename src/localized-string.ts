import * as jsonschema from "jsonschema"

export const schema: jsonschema.Schema = {
  description: `Maps localization identifiers to localized strings.`,
  type: `object`,
  additionalProperties: false,
  patternProperties: {
    "^[_a-z0-9]{6}$": {
      description: `The localized string.`,
      type: `string`,
      minLength: 1
    }
  }
}

export type Type = {
  readonly [localization: string]: string
}
