import { Effect } from "effect"
import { removeTrackFromPlaylist } from "../../repositories/playlist.repository"

export const removeTrackFromPlaylistHandler = (
  playlistId: string,
  trackId: string
) =>
  Effect.tryPromise({
    try: () => removeTrackFromPlaylist(playlistId, trackId),
    catch: (e) => new Error("Failed to remove track: " + String(e)),
  })
