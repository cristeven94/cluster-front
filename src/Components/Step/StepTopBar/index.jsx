import React from "react";
import { ThemeContext } from "../../../Theme";
import "./index.css";

const StepTopBar = ({ activeStep }) => {
  const { step, fontColors } = React.useContext(ThemeContext);
  const { background } = step;
  return (
    <div className="steptopbar-container d-flex w-100 f-content-space-bet">
      <div
        className="step-number d-flex f-content-center a-items-center"
        style={{
          background:
            activeStep == 1 ? background.primary : background.terciary,
          color: activeStep == 1 ? fontColors.secondary : fontColors.primary,
        }}
      >
        1
      </div>
      <div className="step-number-separator a-self-center" />
      <div
        className="step-number d-flex f-content-center a-items-center"
        style={{
          background:
            activeStep == 2 ? background.primary : background.terciary,
          color: activeStep == 2 ? fontColors.secondary : fontColors.primary,
        }}
      >
        2
      </div>
      <div className="step-number-separator a-self-center" />
      <div
        className="step-number d-flex f-content-center a-items-center"
        style={{
          background:
            activeStep == 3 ? background.primary : background.terciary,
          color: activeStep == 3 ? fontColors.secondary : fontColors.primary,
        }}
      >
        3
      </div>
    </div>
  );
};

export default StepTopBar;
