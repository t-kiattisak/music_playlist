import { Hono } from "hono"
import playlistRoute from "../routes/playlist.route"
import trackRoute from "../routes/track.route"
import { authMiddleware } from "../middlewares/authMiddleware"

export const app = new Hono()

app.use("*", authMiddleware)

app.get("/", (c) => c.text("Music playlist Hono!"))
app.route("/playlists", playlistRoute)
app.route("/tracks", trackRoute)
