import * as http from "http";

import { getListEpisodes, getFilterEpisodes, notFoundRoute } from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";



export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  const baseUrl = request.url?.split('?')[0] || '';

  if (request.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
    await getListEpisodes(response);
    return;
  }

  if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request, response);
    return;
  }
  
  await notFoundRoute(response);
}