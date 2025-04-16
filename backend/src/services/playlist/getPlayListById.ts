import { Effect } from "effect"
import { getPlaylistById } from "../../repositories/playlist.repository"

export const getPlaylistByIdHandler = (playlistId: string) => {
  return Effect.tryPromise({
    try: () => getPlaylistById(playlistId),
    catch: (e) => new Error("Failed to get playlist: " + String(e)),
  })
}
