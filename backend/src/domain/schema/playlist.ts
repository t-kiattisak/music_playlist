import { Schema as S } from "effect"

export const CreatePlaylistSchema = S.Struct({
  userId: S.String,
  name: S.String.pipe(S.minLength(1)),
  description: S.optional(S.String),
})

export type CreatePlaylistInput = typeof CreatePlaylistSchema.Type
