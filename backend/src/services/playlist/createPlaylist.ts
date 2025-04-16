import { Effect, pipe, Schema } from "effect"
import {
  CreatePlaylistInput,
  CreatePlaylistSchema,
} from "../../domain/schema/playlist"
import { createPlaylist } from "../../repositories/playlist.repository"

export const createPlaylistHandler = (input: unknown) => {
  return pipe(
    Schema.decodeUnknown(CreatePlaylistSchema)(input),
    Effect.mapError(() => new Error("Invalid playlist input")),
    Effect.flatMap((payload: CreatePlaylistInput) =>
      Effect.tryPromise({
        try: () => createPlaylist(payload),
        catch: (e) => new Error("Failed to create playlist: " + String(e)),
      })
    )
  )
}
