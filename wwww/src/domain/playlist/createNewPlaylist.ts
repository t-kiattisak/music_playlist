import { z } from "zod"

export const createNewPlaylistSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

export type CreateNewPlaylistInput = z.infer<typeof createNewPlaylistSchema>

export interface CreateNewPlaylist {
  data: {
    id: string
    name: string
    userId: string
    createdAt: string
  }
}
