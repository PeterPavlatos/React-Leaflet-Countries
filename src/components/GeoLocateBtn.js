import React, {useContext} from "react";
import { Tooltip, Button } from "reactstrap";
import { FaCrosshairs } from "react-icons/fa";
import { ToggleFormContext } from '../contexts/ToggleFormContext';

const GeoLocateBtn = ({locateMe}) => {
 
  const { toggleTooltipGeo, tooltipGeo } = useContext(ToggleFormContext);
  
  return (
      <>
        <Button id="btnGeoLocation" className="locateBtn" onClick={locateMe}>
            <FaCrosshairs />
        </Button>{" "}
        <Tooltip 
                placement="left" 
                isOpen={tooltipGeo} 
                autohide={false} 
                target="btnGeoLocation" 
                toggle={toggleTooltipGeo}>
            My Location
        </Tooltip>
    </>
  );
};

export default GeoLocateBtn;
