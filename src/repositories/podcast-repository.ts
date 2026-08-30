import fs from 'fs';
import path from 'path';

import { PodcastModel } from '../models/podcast-model';

const pathData = path.join(__dirname, '../repositories/podcasts.json');

export const repoPodcasts = async (podcastName?: string): Promise<PodcastModel[]> => {
  const fileCharset = 'utf-8'

  const data = fs.readFileSync(pathData, fileCharset);
  let jsonFile =  JSON.parse(data)

  if (podcastName) {
    jsonFile = jsonFile.filter((podcast: PodcastModel) => 
      podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
    )
  }

  return jsonFile;
}
