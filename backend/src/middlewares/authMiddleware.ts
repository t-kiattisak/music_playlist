import { MiddlewareHandler } from "hono"

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  try {
    c.set("userId", "user-1")
    await next()
  } catch {
    return c.json({ error: "Invalid token" }, 401)
  }
}
