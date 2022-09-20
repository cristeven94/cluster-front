import React from "react";
import Button from "../Button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import "./index.css";
import StepThree from "./StepThree";
import StepTopBar from "./StepTopBar";

const Step = ({
  onCreateCluster,
  activeStep,
  setActiveStep,
  clusterName,
  setClusterName,
  provider,
  setProvider,
  application,
  setApplication,
  nodes,
  setNodes,
  ram,
  setRam,
  cpu,
  setCpu,
  storage,
  setStorage,
  providerOptions,
  applicationOptions,
}) => {
  const onClickPrimaryButton = () => {
    if (activeStep === 2) {
      onCreateCluster();
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
        <StepOne
          clusterName={clusterName}
          setClusterName={setClusterName}
          application={application}
          provider={provider}
          providerOptions={providerOptions}
          applicationOptions={applicationOptions}
          setProvider={setProvider}
          setApplication={setApplication}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          ram={ram}
          setRam={setRam}
          nodes={nodes}
          setNodes={setNodes}
          cpu={cpu}
          setCpu={setCpu}
          storage={storage}
          setStorage={setStorage}
        />
      )}
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
