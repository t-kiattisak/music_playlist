import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { useGetTracks } from "@/hooks/queries/useTracks"
import { Search, X } from "lucide-react"
import { Button } from "./ui/button"
import { useDebouncedValue } from "@/hooks/useDebounceValue"
import {
  useAddTrackToPlaylist,
  useGetPlaylistById,
} from "@/hooks/queries/usePlaylists"

export const SearchPlaylist = ({ playlistId }: { playlistId: string }) => {
  const [query, setQuery] = useState("")
  const [search] = useDebouncedValue(query, 500)
  const { data } = useGetTracks(search)
  const playlistById = useGetPlaylistById(playlistId)
  const addTracks = useAddTrackToPlaylist()
  const tracks = useMemo(
    () => playlistById.data?.data.tracks ?? [],
    [playlistById.data]
  )

  const items = useMemo(
    () =>
      data?.data?.filter(
        (track) => !tracks.some(({ trackId }) => trackId === track.id)
      ) ?? [],
    [data, tracks]
  )

  return (
    <div className='text-white space-y-4'>
      <h2 className='text-xl font-bold'>
        Let's find something for your playlist
      </h2>

      <div className='relative'>
        <Input
          startIcon={<Search size={16} />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for songs or episodes'
          className='bg-spotify-dark rounded-full text-white'
          endIcon={
            query && (
              <button
                onClick={() => setQuery("")}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white'
              >
                <X size={18} />
              </button>
            )
          }
        />
      </div>

      <div className='space-y-2'>
        {items.map((track) => (
          <div
            key={track.id}
            className='flex items-center justify-between hover:bg-white/10 p-2 rounded'
          >
            <div className='flex items-center space-x-3'>
              <img
                src={track.picture}
                alt={track.title}
                className='w-12 h-12 rounded'
              />
              <div>
                <div className='text-white font-medium truncate max-w-[200px]'>
                  {track.title}
                </div>
                <div className='text-sm text-muted-foreground truncate max-w-[200px]'>
                  {track.artist}
                </div>
              </div>
            </div>
            <div className='flex-1 text-sm text-muted-foreground truncate px-4'>
              {track.album}
            </div>
            <Button
              onClick={() => {
                addTracks.mutate(
                  { playlistId, trackId: track.id },
                  {
                    onSuccess: () => {
                      playlistById.refetch()
                    },
                  }
                )
              }}
              className='border border-white/40 text-white px-4 py-1 rounded-full hover:bg-white/10 text-sm'
            >
              Add
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
