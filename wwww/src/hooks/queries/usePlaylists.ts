import {
  addTrackToPlaylist,
  createNewPlaylist,
  deletePlaylistId,
  deleteTracks,
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
    staleTime: 1000,
    queryKey: ["get-playlist-by-id", paylistId],
    queryFn: ({ queryKey }) => getPlaylistById(queryKey[1]),
  })

export const useCreateNewPlaylist = () =>
  useMutation({ mutationFn: createNewPlaylist })

export const useDeletePlaylistById = () =>
  useMutation({ mutationFn: deletePlaylistId })

export const useDeleteTracks = () => useMutation({ mutationFn: deleteTracks })

export const useAddTrackToPlaylist = () =>
  useMutation({ mutationFn: addTrackToPlaylist })
