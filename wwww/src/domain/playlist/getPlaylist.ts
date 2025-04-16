export interface GetPlaylists {
  data: GetPlaylistData[]
}

interface GetPlaylistData {
  id: string
  name: string
  userId: string
  createdAt: string
  description: string
  user: { name: string }
}
