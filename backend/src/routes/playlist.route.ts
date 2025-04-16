import { Hono } from "hono"

const playlistRoute = new Hono()

playlistRoute.get("/", (c) => {
  return c.json({ message: "Get all playlists" })
})

export default playlistRoute
