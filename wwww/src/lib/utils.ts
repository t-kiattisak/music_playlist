import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import durationPlugin from "dayjs/plugin/duration"

dayjs.extend(durationPlugin)
dayjs.extend(relativeTime)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(date?: dayjs.ConfigType) {
  return dayjs(date).fromNow()
}

export const formatDuration = (seconds: number) => {
  const d = dayjs.duration(seconds, "seconds")
  return `${d.minutes()}:${d.seconds().toString().padStart(2, "0")}`
}
