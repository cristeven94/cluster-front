import React from "react";
import { ThemeContext } from "../../Theme";
import ClusterNode from "../ClusterNode";
import "./index.css";
import { BASE_URL, ENDPOINTS, REQUEST_CREDENTIALS } from "../../Endpoints";

const Cluster = ({ id, nodes = [] }) => {
  const { border } = React.useContext(ThemeContext);
  const { fontColors } = React.useContext(ThemeContext);
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      const headers = {
        Authorization: `Basic ${btoa(REQUEST_CREDENTIALS)}`,
        "Content-Type": "text/plain",
      };
      try {
        const res = await fetch(`${BASE_URL}${ENDPOINTS.ALL}${id}/`, {
          headers,
        });
        const json = await res.json();
        if (!signal.aborted) {
          setUrl(`${json.app_url}/`);
        }
      } catch (err) {
        console.warn("Error actualizando url");
      }
    };
    const interval = setInterval(async () => {
      doFetch();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {url && (
        <a
          target="_blank"
          className="cluster-url"
          href={url}
          style={{
            color: fontColors.primary,
            textDecoration: "underline",
          }}
        >
          Open more cluster information
        </a>
      )}
      {!url && (
        <div
          className="cluster-no-url"
          style={{
            color: fontColors.primary,
            textDecoration: "underline",
          }}
        >
          Cluster information not loaded yet
        </div>
      )}
      <div
        className="cluster-container"
        style={{
          borderColor: border.primary,
        }}
      >
        <div className="node-list d-grid-4">
          {nodes.map((node) => (
            <div key={node.id} className="node-wrapper">
              <ClusterNode {...node} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cluster;
