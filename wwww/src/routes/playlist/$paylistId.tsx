import { EditDetails } from "@/components/edit-details"
import { SearchPlaylist } from "@/components/search-playlist"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  useDeleteTracks,
  useGetPlaylistById,
  useGetPlaylists,
} from "@/hooks/queries/usePlaylists"
import { useToggle } from "@/hooks/useToggle"
import { formatDuration, timeAgo } from "@/lib/utils"
import { useAudioStore } from "@/stores/useAudioStore"
import { createFileRoute, useParams } from "@tanstack/react-router"
import {
  AudioLines,
  CirclePause,
  Clock,
  Ellipsis,
  Music,
  PlayIcon,
  Trash,
} from "lucide-react"

export const Route = createFileRoute("/playlist/$paylistId")({
  component: RouteComponent,
})

function RouteComponent() {
  const { paylistId } = useParams({ from: "/playlist/$paylistId" })
  const { data, isLoading, refetch } = useGetPlaylistById(paylistId)
  const { play, isPlaying, stop, currentTrack } = useAudioStore()
  const playlists = useGetPlaylists()
  const [openDetail, _, setOpenDetail] = useToggle()

  const deleteTracks = useDeleteTracks()

  if (isLoading) {
    return <div>...loading</div>
  }

  if (!data?.data) {
    return (
      <div className='text-white text-center h-52 flex justify-center items-center'>
        not found playlist
      </div>
    )
  }
  return (
    <div className='text-white'>
      <div className='bg-linear-to-t from-spotify-gray-mid/50 to-spotify-gray-mid p-2'>
        <div className='flex gap-4 items-end pt-4'>
          <div className='w-32 h-32 rounded bg-spotify-gray-mid flex items-center justify-center text-4xl text-white'>
            <Music />
          </div>
          <Dialog open={openDetail} onOpenChange={setOpenDetail}>
            <DialogTrigger asChild>
              <div>
                <p className='text-md text-white'>Public Playlist</p>
                <h1 className='text-4xl font-bold leading-none mt-1'>
                  {data.data.name}
                </h1>
                <p className='text-sm mt-2 text-muted-foreground'>
                  {data.data.user.name}
                </p>
              </div>
            </DialogTrigger>

            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle className='text-white'>Edit details</DialogTitle>
              </DialogHeader>
              <EditDetails
                playlistId={paylistId}
                defaultValues={{
                  name: data.data.name,
                  description: data.data.description,
                }}
                edited={() => {
                  setOpenDetail(false)
                  playlists.refetch()
                  refetch()
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {data && data?.data.tracks.length > 0 && (
        <div className='p-6'>
          <Table>
            <TableHeader>
              <TableRow className='border-b border-spotify-gray-soft/50 hover:bg-transparent'>
                <TableHead className=' w-[100px] text-spotify-gray-soft'>
                  #
                </TableHead>
                <TableHead className='text-spotify-gray-soft'>Title</TableHead>
                <TableHead className='text-spotify-gray-soft'>Album</TableHead>
                <TableHead className='text-spotify-gray-soft'>
                  Date added
                </TableHead>
                <TableHead className='text-spotify-gray-soft flex justify-end items-center'>
                  <Clock />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.tracks.map((track, index) => (
                <TableRow
                  className='border-b border-spotify-gray-soft/50 hover:bg-[#ffffff1a]'
                  key={index}
                >
                  <TableCell
                    className='font-medium text-spotify-gray-soft group'
                    onClick={() =>
                      isPlaying && currentTrack?.track.id === track.track.id
                        ? stop()
                        : play(track)
                    }
                  >
                    {isPlaying && currentTrack?.track.id === track.track.id ? (
                      <>
                        <CirclePause className='hidden group-hover:block' />
                        <AudioLines className='block group-hover:hidden text-green-500' />
                      </>
                    ) : (
                      <>
                        <div className='block group-hover:hidden'>
                          {index + 1}
                        </div>
                        <PlayIcon
                          size={16}
                          className='hidden group-hover:block'
                        />
                      </>
                    )}
                  </TableCell>
                  <TableCell className='text-spotify-gray-soft'>
                    <div className='flex space-x-2'>
                      <img
                        src={track.track.picture}
                        className='size-10 rounded-sm'
                        alt={`${track.track.title}-${track.track.artist}`}
                      />
                      <div className='flex flex-col space-x-1'>
                        <div className='text-white'>{track.track.title}</div>
                        <div className='text-spotify-gray-soft'>
                          {track.track.artist}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className='text-spotify-gray-soft'>
                    {track.track.album}
                  </TableCell>
                  <TableCell className='text-spotify-gray-soft'>
                    {timeAgo(track.playlist.createdAt)}
                  </TableCell>
                  <TableCell className='text-right text-spotify-gray-soft'>
                    <div className='flex gap-2 items-center justify-center'>
                      {formatDuration(track.track.duration)}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Ellipsis />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56 border-0'>
                          <DropdownMenuGroup>
                            <DropdownMenuItem
                              onSelect={() =>
                                deleteTracks.mutate(
                                  {
                                    playlistId: track.playlistId,
                                    trackId: track.trackId,
                                  },
                                  {
                                    onSuccess: () => {
                                      refetch()
                                    },
                                  }
                                )
                              }
                            >
                              <Trash />
                              Remove from this playlist
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <SearchPlaylist playlistId={paylistId} />
    </div>
  )
}
