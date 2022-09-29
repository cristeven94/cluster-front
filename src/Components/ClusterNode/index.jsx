import React from "react";
import { ThemeContext } from "../../Theme";
import { BASE_URL, ENDPOINTS, REQUEST_CREDENTIALS } from "../../Endpoints";
import "./index.css";

const ClusterNode = ({ id, node_name = "" }) => {
  const { fontColors, background } = React.useContext(ThemeContext);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [active, setActive] = React.useState(true);
  const handlerOnDelete = async () => {
    const headers = {
      Authorization: `Basic ${btoa(REQUEST_CREDENTIALS)}`,
      "Content-Type": "application/json",
    };
    try {
      await fetch(`${BASE_URL}${ENDPOINTS.ALL}${id}/`, {
        method: "DELETE",
        headers,
      });
      setActive(false);
    } catch (error) {
      console.warn("Error al eliminar nodo", error);
    }
  };
  return active ? (
    <div
      className="clusternode-container d-flex f-col h-100 w-100"
      style={{ backgroundColor: background.terciary }}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="clusternode-header d-flex f-content-space-bet">
        <div className="clusternode-name-container">
          <p
            style={{ color: fontColors.terciary }}
            className="clusternode-name-text"
          />
        </div>
        <div className="clusternode-delete-icon">
          {mouseOver && (
            <span
              style={{ color: fontColors.terciary }}
              className="delete-icon"
              onClick={() => handlerOnDelete()}
            >
              X
            </span>
          )}
        </div>
      </div>
      <div className="clusternode-body d-flex f-col">
        <div className="clusternode-attribute">{`${node_name}`}</div>
      </div>
    </div>
  ) : null;
};

export default ClusterNode;
