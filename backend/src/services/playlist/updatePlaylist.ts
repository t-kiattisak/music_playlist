import { Effect, pipe, Schema } from "effect"
import { UpdatePlaylistSchema } from "../../domain/schema/updatePlaylist"
import { updatePlaylist } from "../../repositories/playlist.repository"

export const updatePlaylistHandler = (input: unknown) => {
  return pipe(
    Schema.decodeUnknown(UpdatePlaylistSchema)(input),
    Effect.mapError(() => new Error("Invalid playlist input")),
    Effect.flatMap((payload) =>
      Effect.tryPromise({
        try: () => updatePlaylist(payload),
        catch: (e) => new Error("Failed to update playlist: " + String(e)),
      })
    )
  )
}
