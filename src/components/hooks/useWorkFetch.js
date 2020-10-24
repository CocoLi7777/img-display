import { useState } from 'react';
import axios from 'axios';

export const useWorksFetch = () => {
  const [data, setData] = useState({ works: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchWorks = async (endpoint, keywordQuery) => {
    setLoading(true);
    setError(false);
    try {
      const queryResult = await axios.post(endpoint, {
        query: keywordQuery,
      });

      const result = queryResult.data.data;
      setData({ works: result.works });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return [{ data, loading, error }, fetchWorks];
};
