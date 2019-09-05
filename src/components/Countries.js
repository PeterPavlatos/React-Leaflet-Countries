import React, {useContext} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
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
  const { toggleForm, collapse } = useContext(ToggleFormContext);

  const text = searchText.trim().toLowerCase();
  const lowerCasedText = text.toLowerCase();
  const filtered = countries.filter(item => {
    return item.name.toLowerCase().match(lowerCasedText);
  });

  const country = countriesLoaded ? (
      <ListGroup className="countriesList">
        {filtered.map(item => (
          <ListGroupItem key={item.name}>
            <Flag flag={item.flag} /> {item.name}
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
  
  return (
    <div className={collapse ? "close-wrapper search-wrapper" : "search-wrapper"}>
      <button className="btnToggleWrapper" onClick={toggleForm}>
        {btnIcon}
      </button>
      <h2>Countries</h2>
      <Search />
      {country}
    </div>
  );
};

export default Countries;
