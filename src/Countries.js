import React, {useContext} from "react";
import { ListGroup, ListGroupItem, InputGroup, Input } from "reactstrap";
import Flag from "./Flag";
import { Button } from "reactstrap";
//import Search from "./Search";
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
            <Button color="primary" className="centerCountry">
              <FaCrosshairs
                onClick={() => {
                  centerCountry(item);
                }}
              />
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
   
  ) : (
      "Loading Countries ..."
  )
  
  return (
    <div className="search-wrapper">
      <h2>Countries</h2>
      <InputGroup className="search-form">
        <Input onChange={onSearchChange} placeholder="Search" />
      </InputGroup>
      {country}
    </div>
  );
};

export default Countries;
