import { Effect, pipe, Schema } from "effect"
import { GetTracksSchema } from "../../domain/schema/tracks"
import { getTracks } from "../../repositories/track.repository"

export const getTracksHandler = (input: unknown) => {
  return pipe(
    Schema.decodeUnknown(GetTracksSchema)(input),
    Effect.mapError(() => new Error("Invalid query")),
    Effect.flatMap(({ search }) =>
      Effect.tryPromise({
        try: () => getTracks(search),
        catch: (e) => new Error("Failed to get tracks: " + String(e)),
      })
    )
  )
}
