import { useGetTracks } from "@/hooks/queries/useTracks"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  const { data } = useGetTracks()
  console.log("data", data)
  return (
    <div className='text-white p-6 space-y-8'>
      <section>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Recommended for you</h2>
          <button className='text-sm text-muted-foreground hover:underline'>
            Show all
          </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {data?.data.map((track, i) => (
            <div
              key={i}
              className='bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded p-2 space-y-2 transition group'
            >
              <img
                src={track.picture}
                alt={track.title}
                className='rounded w-full aspect-square object-cover'
              />
              <p className='font-semibold line-clamp-1'>{track.title}</p>
              <p className='text-sm text-muted-foreground line-clamp-1'>
                {track.artist}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
