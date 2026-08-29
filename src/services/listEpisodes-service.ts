import { repoPodcasts } from "../repositories/podcast-repository";

export const listEpisodesService = async () => {
  const data = await repoPodcasts();

  return data;
}
