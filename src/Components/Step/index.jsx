import React from "react";
import Button from "../Button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import "./index.css";
import StepThree from "./StepThree";
import StepTopBar from "./StepTopBar";

const Step = ({}) => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [clusterName, setClusterName] = React.useState("My new cluster");
  const onClickPrimaryButton = () => {
    if (activeStep === 3) {
      console.log("Finished");
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const onClickSecondaryButton = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div
      className="step-container w-100 h-100 d-flex f-col
		"
    >
      <StepTopBar activeStep={activeStep} />
      {activeStep === 1 && (
        <StepOne clusterName={clusterName} setClusterName={setClusterName} />
      )}
      {activeStep === 2 && <StepTwo />}
      {activeStep === 3 && <StepThree />}

      {activeStep !== 3 && (
        <div className="step-buttons-wrapper d-flex w-100 h-100 a-items-end f-content-end">
          {activeStep !== 1 && (
            <Button
              className="step-button"
              text="Anterior"
              onClick={onClickSecondaryButton}
            />
          )}
          <Button
            className="step-button"
            text="Siguiente"
            onClick={onClickPrimaryButton}
          />
        </div>
      )}
    </div>
  );
};

export default Step;
