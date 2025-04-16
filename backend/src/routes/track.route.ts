import { Hono } from "hono"

const trackRoute = new Hono()

trackRoute.get("/", (c) => {
  return c.json({ message: "Get all tracks" })
})

export default trackRoute
