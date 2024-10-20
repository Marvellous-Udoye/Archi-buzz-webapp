import { useState, useEffect } from "react";

function useFetch(url: string, message: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // setLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((res) => setData(res))
      .catch((err) => setError(message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
