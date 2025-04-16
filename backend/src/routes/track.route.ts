import { Effect } from "effect"
import { Hono } from "hono"
import { getTracksHandler } from "../services/playlist/track/getTracks"

const trackRoute = new Hono()

trackRoute.get("/", async (c) => {
  const search = c.req.query("search")
  return await Effect.runPromise(
    Effect.matchEffect(getTracksHandler({ search }), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

export default trackRoute
