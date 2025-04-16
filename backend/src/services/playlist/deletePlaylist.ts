import { Effect } from "effect"
import { prisma } from "../../infrastructure/prisma"

export const deletePlaylistHandler = (playlistId: string) =>
  Effect.tryPromise({
    try: async () => {
      await prisma.playlistTrack.deleteMany({
        where: { playlistId },
      })
      return prisma.playlist.delete({
        where: { id: playlistId },
      })
    },
    catch: (e) => new Error("Failed to delete playlist: " + String(e)),
  })
