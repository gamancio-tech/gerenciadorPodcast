import { IncomingMessage, ServerResponse } from 'http';

import { listEpisodesService } from '../services/listEpisodes-service'
import { filterEpisodesService } from '../services/filterEpisodes-service'
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcastTransferModel';

export const getListEpisodes = async (
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await listEpisodesService()

  res.writeHead(content.statusCode, { 'content-type': ContentType.JSON })
  res.write(JSON.stringify(content.body))

  res.end()
}

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content: PodcastTransferModel = await filterEpisodesService(req)

  res.writeHead(content.statusCode, { 'content-type': ContentType.JSON })
  res.write(JSON.stringify(content.body))

  res.end()
}

export const notFoundRoute = async (res: ServerResponse) => {

  res.writeHead(StatusCode.NOT_FOUND, { 'content-type': ContentType.JSON })
  res.write(JSON.stringify({ message: 'Rota não encontrada' }))

  res.end()

}