export interface GetPlaylistById {
  data: GetPlaylistByIdData
}

interface GetPlaylistByIdData {
  id: string
  name: string
  description: string
  userId: string
  createdAt: string
  tracks: Tracks[]
  user: User
}

interface User {
  id: string
  name: string
  createdAt: string
}

interface Playlist {
  id: string
  name: string
  userId: string
  createdAt: string
}

export interface Tracks {
  id: string
  playlist: Playlist
  playlistId: string
  trackId: string
  track: Track
}

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  picture: string
  preview: string
}
