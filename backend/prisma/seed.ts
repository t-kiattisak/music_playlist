import { PrismaClient } from "@prisma/client"
import tracks from "./playlistExport.json" assert { type: "json" }

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding tracks...")
  await prisma.playlistTrack.deleteMany()
  await prisma.playlist.deleteMany()
  await prisma.track.deleteMany()
  await prisma.user.deleteMany()

  const user = await prisma.user.create({
    data: {
      id: "user-1",
      name: "Demo User",
    },
  })

  for (const item of tracks) {
    await prisma.track.create({
      data: {
        id: item.id,
        title: item.title,
        artist: item.artist,
        album: item.album,
        duration: parseInt(item.duration),
        picture: item.picture,
        preview: item.preview,
      },
    })
  }

  await prisma.playlist.create({
    data: {
      id: "playlist-1",
      name: "My Demo Playlist",
      userId: user.id,
      tracks: {
        create: [
          { trackId: tracks[0].id },
          { trackId: tracks[1].id },
          { trackId: tracks[2].id },
        ],
      },
    },
  })

  console.log("Done seeding!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
