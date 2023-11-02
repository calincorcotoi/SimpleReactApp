import { useEffect, useState } from "react";

const useFetch = <Type>(url: string) => {
  const [data, setData] = useState<Type | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    setTimeout(() => {
      fetch(url, {
        signal: controller.signal,
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(" could now fetch data for the resource");
          }
          return res.json();
        })
        .then((data) => {
          if (data !== null) {
            setData(data);
            setIsPending(false);
          }
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("successfully aborted");
          } else {
            setIsPending(false);
            setError(e.message);
          }
        });
    }, 1000);

    return () => controller.abort();
  }, []);

  return { data, isPending, error };
};

export default useFetch;
