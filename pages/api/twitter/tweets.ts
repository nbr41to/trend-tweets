import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../src/libs/twitter/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { query } = req.query as { query: string };

  const response = await client.tweets.tweetsRecentSearch({
    query,
    max_results: 20,
  });

  res.status(200).json(response);
}
