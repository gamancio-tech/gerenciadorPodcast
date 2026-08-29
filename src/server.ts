import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcast-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split('?') ?? ['', '']

    if (req.method === "GET" && baseUrl === "/api/list") {
      await getListEpisodes(req, res);
    }
    if (req.method === "GET" && baseUrl === "/api/episodes") {
      await getFilterEpisodes(req, res);
    }
  }
);

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});