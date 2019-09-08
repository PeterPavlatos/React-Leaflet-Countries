import React, {useContext} from "react";
import { ListGroup, ListGroupItem, Tooltip } from "reactstrap";
import Flag from "./Flag";
import Search from "./Search";
import { FaCrosshairs, FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { CountryContext } from '../contexts/CountryContext';
import { SearchContext } from '../contexts/SearchContext';
import { ToggleFormContext } from '../contexts/ToggleFormContext';

const Countries = ({
  centerCountry
}) => {
 
  const { countries, countriesLoaded } = useContext(CountryContext);
  const { searchText } = useContext(SearchContext);
  const { toggleForm, collapse, toggleTooltip, tooltip } = useContext(ToggleFormContext);

  const text = searchText.trim().toLowerCase();
  const lowerCasedText = text.toLowerCase();
  const filtered = countries.filter(item => {
    return item.name.toLowerCase().match(lowerCasedText);
  });

  const country = countriesLoaded ? (
      <ListGroup className="countriesList">
        {filtered.map(item => (
          <ListGroupItem key={item.name}>
            <Flag flag={item.flag} /> 
            <span className="countriesListName">
              {item.name}       
            </span>
            <FaCrosshairs className="centerCountry"
              onClick={() => {
                centerCountry(item);
              }}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
   
  ) : (
      "Loading Countries ..."
  )

  const btnIcon = collapse ? (
      <FaCaretRight/>
    ) : (
      <FaCaretLeft/>
    );

  const tooltipText = collapse ? (
    "Open"
  ) : (
    "Close"
  )
  
  return (
    <div className={collapse ? "close-wrapper search-wrapper" : "search-wrapper"}>
      <button id="btnSearchWrapperToggle" className="btnToggleWrapper" onClick={toggleForm}>
        {btnIcon}
      </button>
      <Tooltip placement="right" isOpen={tooltip} autohide={false} target="btnSearchWrapperToggle" toggle={toggleTooltip}>
          {tooltipText}
      </Tooltip>
      <h2>Countries</h2>
      <Search />
      {country}
    </div>
  );
};

export default Countries;
