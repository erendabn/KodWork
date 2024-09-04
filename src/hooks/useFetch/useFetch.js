import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      const {data: responseData} = await axios.get(url);
      setLoading(false);
      setData(responseData);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return {data, loading, error};
}
export default useFetch;
