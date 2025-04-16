import { z } from "zod"

export const updatePlaylistSchema = z.object({
  playlistId: z.string(),
  name: z.string().min(1),
  description: z.string().optional(),
})

export type UpdatePlaylistSchemaInput = z.infer<typeof updatePlaylistSchema>
