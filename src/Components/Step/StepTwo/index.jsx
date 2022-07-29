import React from "react";
import { ThemeContext } from "../../../Theme";
import Title from "../../Title";
import "./index.css";

const StepTwo = ({}) => {
  const { fontColors, fontSizes } = React.useContext(ThemeContext);
  return (
    <div className="steptwo-container row-gap-2 w-100 h-100 d-flex f-col">
      <Title
        textClassName="f-content-start"
        text="Add Nodes"
        type="secondary"
      />
      <div className="nodes-form-wrapper d-flex w-100">
        <div className="nodes-label-wrapper d-flex">
          <label
            style={{ color: fontColors.primary }}
            htmlFor="node"
            className="nodes-label"
          >
            Number of nodes:
          </label>
          <input type="number" className="nodes-input" />
        </div>
      </div>
      <Title
        textClassName="f-content-start"
        text="Node Configuration"
        type="secondary"
      />
      <div className="config-form-wrapper row-gap-2 d-flex f-col w-100">
        <div className="ram-wrapper d-flex">
          <div className="ram-label-wrapper">
            <label
              style={{ color: fontColors.primary }}
              htmlFor="ram"
              className="ram-label"
            >
              RAM:
            </label>
          </div>
          <input type="number" className="ram-input" />
          <span
            style={{ color: fontColors.primary, fontSize: fontSizes.small }}
          >
            GB
          </span>
        </div>
        <div className="cpu-wrapper d-flex">
          <div className="cpu-label-wrapper">
            <label
              style={{ color: fontColors.primary }}
              htmlFor="cpu"
              className="cpu-label"
            >
              CPU:
            </label>
          </div>
          <input type="number" className="cpu-input" />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
