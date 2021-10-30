import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            setError("Could not fetch the data for that resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 10);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
