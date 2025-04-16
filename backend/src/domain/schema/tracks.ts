import { Schema as S } from "effect"

export const GetTracksSchema = S.Struct({
  search: S.optional(S.String),
})

export type GetTracksInput = typeof GetTracksSchema.Type
