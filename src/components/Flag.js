import React from "react";

const Flag = ({ flag, customClass }) => {
  return (
    <>
      <img src={flag} alt="" className={customClass}/>
    </>
  );
};

export default Flag;
