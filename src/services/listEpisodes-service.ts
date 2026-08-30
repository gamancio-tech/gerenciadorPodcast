import { PodcastTransferModel } from "../models/filterPodcast-model";
import { repoPodcasts } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const listEpisodesService = async (): Promise<PodcastTransferModel> => {
  const data = await repoPodcasts();

  const responseFormat: PodcastTransferModel = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data
  }

  return responseFormat;
}
