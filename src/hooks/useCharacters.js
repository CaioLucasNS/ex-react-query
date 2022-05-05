import { useEffect, useState } from "react";
import api from "../services/api";

export function useCharacters(url, options) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => response.data)
      .then((data) => setData(data.results))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, isFetching };
}
