import { IncomingMessage, ServerResponse } from 'http';

import { listEpisodesService } from '../services/listEpisodes-service'
import { filterEpisodesService } from '../services/filterEpisodes-service'
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse
) => {
  const content = await listEpisodesService()

  res.writeHead(StatusCode.OK, { 'content-type': ContentType.JSON })
  res.end(JSON.stringify(content))
}

export const getFilterEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse
) => {

  const content = await filterEpisodesService(req)

  res.writeHead(StatusCode.OK, { 'content-type': ContentType.JSON })
  res.end(JSON.stringify(content))
}

export const notFoundRoute = async (res: ServerResponse) => {
  res.writeHead(StatusCode.NOT_FOUND, { 'content-type': ContentType.JSON })
  res.end(JSON.stringify({ message: 'Rota não encontrada' }))
}