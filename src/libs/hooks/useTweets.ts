import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useTweets = (query: string) => {
  const { data, error } = useSWR(
    `/api/twitter/tweets?query=${query}`,
    query ? fetcher : null,
    {
      refreshInterval: 1000 * 60 * 15, // 15 minutes
    },
  );

  return {
    data: data ? data.data : null,
    error,
  };
};
