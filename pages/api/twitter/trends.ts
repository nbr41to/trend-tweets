import type { NextApiRequest, NextApiResponse } from 'next';
import { getTrends } from '../../../src/libs/twitter/getTrends';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const response = await getTrends();

  res.status(200).json(response);
}
