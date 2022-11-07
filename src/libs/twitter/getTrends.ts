import axios from 'axios';

const WOEID_IDS = {
  japan: 23424856,
  tokyo: 1118370,
  yokohama: 1118550,
  osaka: 15015370,
};

export const getTrends = async () => {
  const response = await axios.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424856',
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    },
  );

  return response.data;
};
