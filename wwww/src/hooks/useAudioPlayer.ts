import { useRef, useState } from "react"

export const useAudioPlayer = <T = unknown>() => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<T | null>(null)

  const play = (url: string, meta: T) => {
    if (audioRef.current) {
      audioRef.current.pause()
    }

    const audio = new Audio(url)
    audioRef.current = audio
    audio.play()

    setIsPlaying(true)
    setCurrentTrack(meta)

    audio.onended = () => {
      setIsPlaying(false)
      setCurrentTrack(null)
    }
  }

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
      setCurrentTrack(null)
    }
  }

  return {
    play,
    stop,
    isPlaying,
    currentTrack,
  }
}
