import { AtomIcon, FolderIcon, Music, PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar } from "./ui/avatar"
import { useNavigate } from "@tanstack/react-router"

export const DropdownCreate = () => {
  const navigation = useNavigate()
  const createPlaylist = () => {
    // Logic to create a playlist
    console.log("Playlist created")
    navigation({ to: "/playlist/$paylistId", params: { paylistId: "1" } })
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='rounded-full'>
            <PlusIcon />
            Create
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='bg-[#282828] p-2 border-0'
          sideOffset={6}
        >
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => createPlaylist()}
              className='focus:bg-[hsla(0,0%,100%,.1)]'
            >
              <Avatar className='bg-spotify-gray-mid size-12 flex items-center justify-center'>
                <Music className='text-white size-6' />
              </Avatar>
              <div>
                <p className='text-white'>Playlist</p>
                <p className='text-[#7c7c7c]'>
                  Build a playlist with songs, or episodes
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className='bg-spotify-gray-mid' />
          <DropdownMenuGroup>
            <DropdownMenuItem className='focus:bg-[hsla(0,0%,100%,.1)]'>
              <Avatar className='bg-spotify-gray-mid size-12 flex items-center justify-center'>
                <AtomIcon className='text-white size-6' />
              </Avatar>
              <div>
                <p className='text-white'>Blend</p>
                <p className='text-[#7c7c7c]'>
                  Mix up your tastes with friends{" "}
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuItem className='focus:bg-[hsla(0,0%,100%,.1)]'>
              <Avatar className='bg-spotify-gray-mid size-12 flex items-center justify-center'>
                <FolderIcon className='text-white size-6' />
              </Avatar>
              <div>
                <p className='text-white'>Folder</p>
                <p className='text-[#7c7c7c]'>Organize your playlists</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
