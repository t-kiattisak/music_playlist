import { getTracks } from "@/services/tracks"
import { useQuery } from "@tanstack/react-query"

export const useGetTracks = (search = "") =>
  useQuery({
    queryKey: ["get-tracks", search],
    queryFn: ({ queryKey }) => getTracks(queryKey[1]),
  })
