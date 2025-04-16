export interface GetTracks {
  data: GetTracksData[]
}

interface GetTracksData {
  id: string
  title: string
  artist: string
  album: string
  duration: number
  picture: string
  preview: string
}
