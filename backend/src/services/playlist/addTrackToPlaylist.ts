import { Effect, pipe, Schema } from "effect"
import { AddTrackSchema } from "../../domain/schema/addTrack"
import { addTrackToPlaylist } from "../../repositories/playlist.repository"

export const addTrackToPlaylistHandler = (input: unknown) =>
  pipe(
    Schema.decodeUnknown(AddTrackSchema)(input),
    Effect.mapError(() => new Error("Invalid input")),
    Effect.flatMap(({ playlistId, trackId }) =>
      Effect.tryPromise({
        try: () => addTrackToPlaylist(playlistId, trackId),
        catch: (e) => new Error("Failed to add track: " + String(e)),
      })
    )
  )
