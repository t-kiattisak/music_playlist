import { Effect } from "effect"
import { Hono } from "hono"
import { createPlaylistHandler } from "../services/playlist/createPlaylist"
import { getPlaylistByIdHandler } from "../services/playlist/getPlayListById"
import { getPlayListsByUserHandler } from "../services/playlist/getPlayListByUser"
import { deletePlaylistHandler } from "../services/playlist/deletePlaylist"
import { addTrackToPlaylistHandler } from "../services/playlist/addTrackToPlaylist"
import { removeTrackFromPlaylistHandler } from "../services/playlist/removeTrackFromPlaylist"
import { updatePlaylistHandler } from "../services/playlist/updatePlaylist"

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

playlistRoute.put("/:playlistId", async (c) => {
  const input = await c.req.json()
  const playlistId = c.req.param("playlistId")
  return await Effect.runPromise(
    Effect.matchEffect(updatePlaylistHandler({ ...input, playlistId }), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

playlistRoute.delete("/:id", async (c) => {
  const id = c.req.param("id")
  return await Effect.runPromise(
    Effect.matchEffect(deletePlaylistHandler(id), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

playlistRoute.post("/:id/add", async (c) => {
  const playlistId = c.req.param("id")
  const body = await c.req.json()
  const input = { playlistId, trackId: body.trackId }

  return await Effect.runPromise(
    Effect.matchEffect(addTrackToPlaylistHandler(input), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

playlistRoute.delete("/:id/:trackId", async (c) => {
  const playlistId = c.req.param("id")
  const trackId = c.req.param("trackId")

  return await Effect.runPromise(
    Effect.matchEffect(removeTrackFromPlaylistHandler(playlistId, trackId), {
      onSuccess: (data) => Effect.succeed(c.json({ data })),
      onFailure: (err) => Effect.succeed(c.json({ error: err.message }, 400)),
    })
  )
})

export default playlistRoute
