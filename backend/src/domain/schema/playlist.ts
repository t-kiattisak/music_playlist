import { Schema as S } from "effect"

export const CreatePlaylistSchema = S.Struct({
  userId: S.String,
  name: S.String.pipe(S.minLength(1)),
})

export type CreatePlaylistInput = typeof CreatePlaylistSchema.Type
