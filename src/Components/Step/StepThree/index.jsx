import React from "react";
import Loader from "../../Loader";

const StepThree = ({ creating }) => {
  return (
    <div className="stepthree-container w-100 h-100 d-flex f-content-center a-items-center">
      <Loader size="7rem" text="Creating Cluster" />
    </div>
  );
};

export default StepThree;
