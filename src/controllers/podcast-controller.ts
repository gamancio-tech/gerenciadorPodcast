import { IncomingMessage, ServerResponse } from 'http';
import { listEpisodesService } from '../services/listEpisodes-service'
import { filterEpisodesService } from '../services/filterEpisodes-service'

export const getListEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse
) => {
  const content = await listEpisodesService()

  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify(content))
}

export const getFilterEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse
) => {
  const content = await filterEpisodesService('flow')

  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify(content))
}