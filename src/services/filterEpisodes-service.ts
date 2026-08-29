import { repoPodcasts } from "../repositories/podcast-repository";

export const filterEpisodesService = async (podcastName: string) => {
  const data = await repoPodcasts(podcastName)

  return data;
}