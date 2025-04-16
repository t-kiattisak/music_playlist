import { prisma } from "../infrastructure/prisma"

export const getTracks = async (search?: string) => {
  return prisma.track.findMany({
    where: search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { artist: { contains: search, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: { title: "asc" },
  })
}
