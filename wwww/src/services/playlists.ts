import type { GetPlaylistById } from "@/domain/playlist/getPaylistById"
import type { GetPlaylists } from "@/domain/playlist/getPlaylist"
import { network } from "@/lib/network"

export const getPlaylists = async () => {
  const { data } = await network.get<GetPlaylists>("/playlists")
  return data
}

export const getPlaylistById = async (paylistId: string) => {
  const { data } = await network.get<GetPlaylistById>(`/playlists/${paylistId}`)
  return data
}
