import { IncomingMessage } from "http";
import { repoPodcasts } from "../repositories/podcast-repository";

export const filterEpisodesService = async (request: IncomingMessage) => {
  const queryParam = '?p='

  const queryString = request.url?.split(queryParam)[1] || '';
  const data = await repoPodcasts(queryString)

  return data;
}