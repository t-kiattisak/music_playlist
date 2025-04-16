import { createFileRoute, useParams } from "@tanstack/react-router"

export const Route = createFileRoute("/playlist/$paylistId")({
  component: RouteComponent,
})

function RouteComponent() {
  const { paylistId } = useParams({ from: "/playlist/$paylistId" })

  return <div className='text-white'>playlist :: {paylistId} !!</div>
}
