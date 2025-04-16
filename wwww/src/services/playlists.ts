import type {
  CreateNewPlaylist,
  CreateNewPlaylistInput,
} from "@/domain/playlist/createNewPlaylist"
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

export const createNewPlaylist = async (input: CreateNewPlaylistInput) => {
  const { data } = await network.post<CreateNewPlaylist>("/playlists", input)
  return data
}

export const deletePlaylistId = async (playlistId: string) => {
  const { data } = await network.delete(`/playlists/${playlistId}`)
  return data
}
