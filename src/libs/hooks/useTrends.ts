import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useTrends = () => {
  const { data, error } = useSWR('/api/twitter/trends', fetcher, {
    refreshInterval: 1000 * 60 * 15, // 15 minutes
  });

  return {
    data: data ? data[0] : null,
    error,
  };
};
