import { getPlaylistById, getPlaylists } from "@/services/playlists"
import { useQuery } from "@tanstack/react-query"

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
