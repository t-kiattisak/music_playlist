import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div>
      {Array(1000)
        .fill(0)
        .map((_, index) => (
          <div key={index} className='text-white'>
            xc {index}
          </div>
        ))}
    </div>
  )
}
