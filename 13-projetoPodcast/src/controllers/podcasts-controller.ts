import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const DEFAULT_CONTENT = { "content-type": ContentType.JSON };

export const getEpisodesList = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();
  response.writeHead(content.statusCode, DEFAULT_CONTENT);
  response.write(JSON.stringify(content.body));
  response.end();
};

export const getFilteredEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};
