import { Hono } from "hono"
import playlistRoute from "../routes/playlist.route"
import trackRoute from "../routes/track.route"
import { authMiddleware } from "../middlewares/authMiddleware"
import { cors } from "hono/cors"

export const app = new Hono()

app.use("*", cors())
app.use("*", authMiddleware)

app.get("/", (c) => c.text("Music playlist Hono!"))
app.route("/playlists", playlistRoute)
app.route("/tracks", trackRoute)
