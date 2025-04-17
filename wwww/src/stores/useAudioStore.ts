import { create } from "zustand"
import type { Tracks } from "@/domain/playlist/getPaylistById"

type AudioState = {
  currentTrack: Tracks | null
  isPlaying: boolean
  play: (track: Tracks) => void
  pause: () => void
  stop: () => void
  toggle: () => void
}

let audioRef: HTMLAudioElement | null = null

export const useAudioStore = create<AudioState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,

  play: (track) => {
    if (audioRef) {
      audioRef.pause()
    }

    audioRef = new Audio(track.track.preview)
    audioRef.play()

    set({ currentTrack: track, isPlaying: true })

    audioRef.onended = () => {
      set({ isPlaying: false, currentTrack: null })
      audioRef = null
    }
  },

  pause: () => {
    if (audioRef) {
      audioRef.pause()
      set({ isPlaying: false })
    }
  },

  stop: () => {
    if (audioRef) {
      audioRef.pause()
      audioRef.currentTime = 0
      set({ isPlaying: false, currentTrack: null })
      audioRef = null
    }
  },

  toggle: () => {
    const { isPlaying, currentTrack } = get()
    if (isPlaying) {
      get().pause()
    } else if (currentTrack) {
      get().play(currentTrack)
    }
  },
}))
