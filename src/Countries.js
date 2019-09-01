import React, {useContext} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Flag from "./Flag";
import Search from "./Search";
import { FaCrosshairs } from "react-icons/fa";
import { CountryContext } from './contexts/CountryContext';

const Countries = ({
  searchText,
  centerCountry,
  onSearchChange
}) => {
 
  const { countries, countriesLoaded } = useContext(CountryContext);
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
  
  return (
    <div className="search-wrapper">
      <h2>Countries</h2>
      <Search onSearchChange={onSearchChange} />
      {country}
    </div>
  );
};

export default Countries;
