import { Hono } from "hono"
import playlistRoute from "../routes/playlist.route"
import trackRoute from "../routes/track.route"

export const app = new Hono()

app.get("/", (c) => c.text("Music playlist Hono!"))
app.route("/playlists", playlistRoute)
app.route("/tracks", trackRoute)
