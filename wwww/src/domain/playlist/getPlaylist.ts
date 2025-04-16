export interface GetPlaylists {
  data: GetPlaylistData[]
}

interface GetPlaylistData {
  id: string
  name: string
  userId: string
  createdAt: string
  user: { name: string }
}
