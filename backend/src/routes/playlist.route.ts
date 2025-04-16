import { Effect } from "effect"
import { Hono } from "hono"
import { createPlaylistHandler } from "../services/playlist/createPlaylist"
import { getPlaylistByIdHandler } from "../services/playlist/getPlayListById"
import { getPlayListsByUserHandler } from "../services/playlist/getPlayListByUser"

const playlistRoute = new Hono<{ Variables: { userId: string } }>()

playlistRoute.get("/", async (c) => {
  const userId = c.get("userId")
  return await Effect.runPromise(
    Effect.matchEffect(getPlayListsByUserHandler(userId), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

playlistRoute.get("/:id", async (c) => {
  const id = c.req.param("id")
  return await Effect.runPromise(
    Effect.matchEffect(getPlaylistByIdHandler(id), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

playlistRoute.post("/", async (c) => {
  const input = await c.req.json()
  const userId = c.get("userId")
  return await Effect.runPromise(
    Effect.matchEffect(createPlaylistHandler({ ...input, userId }), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

export default playlistRoute
