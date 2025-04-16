import { Schema as S } from "effect"

export const AddTrackSchema = S.Struct({
  playlistId: S.String,
  trackId: S.String,
})

export type AddTrackInput = typeof AddTrackSchema.Type
