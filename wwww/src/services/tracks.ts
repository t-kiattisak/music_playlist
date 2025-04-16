import type { GetTracks } from "@/domain/tracks/getTracks"
import { network } from "@/lib/network"

export const getTracks = async (search = "") => {
  const { data } = await network.get<GetTracks>("/tracks", {
    params: { search },
  })
  return data
}
