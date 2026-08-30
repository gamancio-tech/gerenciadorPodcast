import * as http from "http";

import { getListEpisodes, getFilterEpisodes, notFoundRoute } from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";



export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  const [baseUrl, queryString] = request.url?.split('?') ?? ['', '']

  if (request.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
    await getListEpisodes(request, response);
    return;
  }

  if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request, response);
    return;
  }
  
  await notFoundRoute(response);
}