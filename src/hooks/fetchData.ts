import { useState, useEffect } from "react";

function useFetch(url: string, message: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => setData(res))
      .catch((err) => setError(err + message))
      .finally(() => setLoading(false));
  }, [url, message]);

  return { data, loading, error };
}

export default useFetch;
