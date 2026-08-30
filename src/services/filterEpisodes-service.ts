import { IncomingMessage } from "http";
import { repoPodcasts } from "../repositories/podcast-repository";
import { PodcastTransferModel } from "../models/podcastTransferModel";
import { StatusCode } from "../utils/status-code";
import { PodcastModel } from "../models/podcast-model";

export const filterEpisodesService = async (
  request: IncomingMessage
): Promise<PodcastTransferModel> => {

  // Cria um contrato / interface para a resposta 
  let responseFormat: PodcastTransferModel = {
    statusCode: 200,
    body: []
  }

  // Parametro de filtragem
  const queryParam = '?p='
  const queryString = request.url?.split(queryParam)[1] || '';

  // Faz a busca e define qual o status code
  let data: PodcastModel[] = []

  if (queryString) {
    data = await repoPodcasts(queryString)
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
  } else {
    responseFormat.statusCode = StatusCode.BAD_REQUEST
  }

  responseFormat.body = data;

  return responseFormat;
}