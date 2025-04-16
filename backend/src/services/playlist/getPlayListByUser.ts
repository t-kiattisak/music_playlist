import { Effect } from "effect"
import { getPlaylistsByUserId } from "../../repositories/playlist.repository"

export const getPlayListsByUserHandler = (userId: string) =>
  Effect.tryPromise({
    try: () => getPlaylistsByUserId(userId),
    catch: (e) => new Error("Failed to get user playlists: " + String(e)),
  })
