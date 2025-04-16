import {
  createNewPlaylist,
  deletePlaylistId,
  getPlaylistById,
  getPlaylists,
} from "@/services/playlists"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetPlaylists = () =>
  useQuery({
    queryKey: ["get-playlist"],
    queryFn: () => getPlaylists(),
  })

export const useGetPlaylistById = (paylistId: string) =>
  useQuery({
    queryKey: ["get-playlist-by-id", paylistId],
    queryFn: ({ queryKey }) => getPlaylistById(queryKey[1]),
  })

export const useCreateNewPlaylist = () =>
  useMutation({ mutationFn: createNewPlaylist })

export const useDeletePlaylistById = () =>
  useMutation({ mutationFn: deletePlaylistId })
