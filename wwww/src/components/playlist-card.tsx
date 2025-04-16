import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"
import { Music } from "lucide-react"

type PlaylistCardProps = {
  name: string
  owner: string
  isActive?: boolean
}

export const PlaylistCard = ({ name, owner, isActive }: PlaylistCardProps) => {
  return (
    <Card
      className={cn(
        "flex flex-row items-center border-0 gap-4 p-3 rounded-lg cursor-pointer",
        isActive
          ? "bg-spotify-gray-mid"
          : "bg-transparent hover:bg-spotify-gray-mid transition"
      )}
    >
      <div className='w-12 h-12 rounded bg-spotify-gray-soft flex items-center justify-center text-white'>
        <Music className='text-white size-6' />
      </div>

      <CardContent className='p-0 flex flex-col'>
        <div className='text-sm font-semibold text-white leading-tight'>
          {name}
        </div>
        <div className='text-xs text-[var(--spotify-muted-light)]'>
          Playlist • {owner}
        </div>
      </CardContent>
    </Card>
  )
}
