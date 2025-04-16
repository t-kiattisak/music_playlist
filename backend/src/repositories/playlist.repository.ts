import { prisma } from "../infrastructure/prisma"

// สร้าง playlist ให้ user
export const createPlaylist = async (userId: string, name: string) => {
  return prisma.playlist.create({
    data: {
      name,
      userId,
    },
  })
}

// อัพเดท playlist ให้ user
export const updatePlaylist = async (playlistId: string, name: string) => {
  return prisma.playlist.update({
    where: { id: playlistId },
    data: { name },
  })
}

// ดึง playlist แบบรวมเพลง (tracks)
export const getPlaylistById = async (playlistId: string) => {
  return prisma.playlist.findUnique({
    where: { id: playlistId },
    include: {
      user: true,
      tracks: {
        include: {
          track: true,
          playlist: true,
        },
      },
    },
  })
}

// ดึง playlist ทั้งหมดของ user
export const getPlaylistsByUserId = async (userId: string) => {
  return prisma.playlist.findMany({
    where: { userId },
    include: { user: { select: { name: true } } },
  })
}

// เพิ่มเพลงเข้า playlist
export const addTrackToPlaylist = async (
  playlistId: string,
  trackId: string
) => {
  return prisma.playlistTrack.create({
    data: {
      playlistId,
      trackId,
    },
  })
}

// ลบเพลงออกจาก playlist
export const removeTrackFromPlaylist = async (
  playlistId: string,
  trackId: string
) => {
  return prisma.playlistTrack.delete({
    where: {
      playlistId_trackId: {
        playlistId,
        trackId,
      },
    },
  })
}
