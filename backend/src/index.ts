import { serve } from "bun"
import { app } from "./app/server"

const server = serve({
  fetch: app.fetch,
  port: 3001,
  development: true,
})
console.log(`Server is running on http://localhost:${server.port}`)
