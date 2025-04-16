import { Schema as S } from "effect"

export const UpdatePlaylistSchema = S.Struct({
  playlistId: S.String,
  name: S.optional(S.String),
  description: S.optional(S.String),
})

export type UpdatePlaylistInput = typeof UpdatePlaylistSchema.Type
