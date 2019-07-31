import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Flag from "./Flag";
import { Button, Spinner } from "reactstrap";
//import Search from "./Search";
import { FaCrosshairs } from "react-icons/fa";

const Countries = ({
  countries,
  searchText,
  centerCountry,
  countriesLoaded
}) => {
  //console.log(countries);
  //console.log(searchText);
  //searchText = 'AFG';
  searchText = searchText.trim().toLowerCase();
  const lowerCasedSearchText = searchText.toLowerCase();
  const filtered = countries.filter(item => {
    return item.name.toLowerCase().match(lowerCasedSearchText);
  });
  // const country = this.props.countriesLoaded ? (
  //   <ListGroup className="countriesList">
  //     {filtered.map(item => (
  //       <ListGroupItem key={item.name}>
  //         <Flag flag={item.flag} /> {item.name}
  //         <Button color="primary" className="centerCountry">
  //           <FaCrosshairs
  //             onClick={() => {
  //               centerCountry(item);
  //             }}
  //           />
  //         </Button>
  //       </ListGroupItem>
  //     ))}
  //   </ListGroup>
  // ) : (
  //     "hello"
  // )

  return (
    <ListGroup className="countriesList">
      {!filtered ? (
        <Spinner color="dark" />
      ) : (
        filtered.map(item => (
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
        ))
      )}
    </ListGroup>
  );
};

export default Countries;
