import React from "react";
import { ThemeContext } from "../../../Theme";
import "./index.css";

const StepOne = ({
  clusterName,
  setClusterName,
  provider,
  setProvider,
  application,
  setApplication,
  applicationOptions,
  providerOptions,
}) => {
  const { fontColors } = React.useContext(ThemeContext);
  return (
    <div className="stepone-container w-100">
      <div className="stepone-fields d-flex f-col w-100  row-gap-2">
        <div className="stepone-field">
          <input
            type="text"
            className="namefield-input"
            placeholder="Cluster Name"
            value={clusterName}
            onChange={(e) => setClusterName(e.target.value)}
            style={{ color: fontColors.primary }}
          />
        </div>
        <div className="stepone-field d-flex">
          <div
            htmlFor="provider"
            className="stepone-label"
            style={{ color: fontColors.primary }}
          >
            Cloud Provider
          </div>
          <select
            name="provider"
            id="provider"
            className="stepone-selection-input"
            onChange={(e) => setProvider(Number(e.target.value))}
            value={provider}
          >
            {providerOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.cloud_name}
              </option>
            ))}
          </select>
        </div>
        <div className="stepone-field d-flex">
          <div
            htmlFor="application"
            className="stepone-label"
            style={{ color: fontColors.primary }}
          >
            Application
          </div>
          <select
            name="application"
            id="application"
            className="stepone-selection-input"
            onChange={(e) => setApplication(Number(e.target.value))}
            value={application}
          >
            {applicationOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.application_name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
