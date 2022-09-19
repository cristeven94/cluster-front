import React from "react";
import { BASE_URL, REQUEST_CREDENTIALS } from "../Endpoints";

const useFetch = ({
  endpoint,
  headers = {
    Authorization: `Basic ${btoa(REQUEST_CREDENTIALS)}`,
    "Content-Type": "text/plain",
  },
  // method = "GET",
  // fetchOnClick = false,
  dependencies = [],
}) => {
  // const [clicked, setClicked] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      // if (!fetchOnClick && !clicked) {
      //   debugger;
      //   return;
      // }
      setLoading(true);
      try {
        debugger;
        const res = await fetch(`${BASE_URL}${endpoint}`, {
          // method,
          headers,
        });
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    doFetch();
    return () => abortController.abort();
  }, [...dependencies]);

  return { response, error, loading };
};

export default useFetch;
