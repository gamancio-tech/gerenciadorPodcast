import { PodcastModel } from "./podcast-model";

// DTO - data transfer object
export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}