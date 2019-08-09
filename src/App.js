import React, { Component } from "react";
//import MapWrapper from "./Map";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Countries from "./Countries";
import CardContent from "./CardContent";
//import Flag from "./Flag";
//import Search from "./Search";
import {
  Card,
  CardImg,
  CardBody,
  Button
} from "reactstrap";
import "./App.css";

var myIcon = L.icon({
  iconUrl:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABelBMVEVHcEz/QAD/PQD/PQD/PQD/OwD/PQD/VQD/PQD/PgD/PgD/PQD/RgD/QAD/PQD/PQD/PgD/PQD/PAD/PAD/PQD/PQD/PQD/PgD/MwD/QAD/PgD/PAD/PQD/PQD/OwD/NwD/PQD/PQD/AAD/PQD/PQD/QAD/PAD/AAD/PAD/PQD/PwD/PAD/OwD/PQD/PAD/PQD/PQD/OQD/PQD/PgD/PAD/PQD/PQD/NwD/PgD/KwD/PQD/PwD/PgD/PQD/PQD/PAD/PQD/PAD/PQD/PQD/PgD/PQD/PQD/PgD/RAD/PgD/PgD/PQD/PwD/PQD/PQD/QAD/PQD/PQD/OQD/OwD/PAD/PgD/PAD/PQD/PQD/PQD/PQD/PgD/PQD/PQD/PAD/PQD/PgD/PQD/PwD/PQD/PAD/PQD/PQD/PQD/PgD/SQD/PQD/PAD/PQD/PQD/PQD/PQD/PgD/PQD/QAD/PAD/PgD/PAD/PQD/PQD/PgD/PgD/PQD/PQD/PQD/PQCv0krVAAAAfXRSTlMALP3m+g34A/nLb/ULDMZpeNVuRCrJcWsFHFqYwfQrF2jUAmzyBNMBHtJBSBqgZqLqCWWyIvC3Dp0GNkUh4OVA7yZP/uTffSUPTpHuObDzJFOWG0lyPnfjgcRDKYbt6K+VLj33TZrdGUIHw76k58hHLfEI14Q3vL9jHevN+5lLF0YAAAHKSURBVEjHpZZVVwMxEIVrdOtGoS1QhSLFiru7u7u7u+S/w6GQZHaT7PYwj9/cuyfJJjOj0/0/3mpqP94/TWlr9WuVBnnliwHhMDznqsnzkCxcIsvoJWJEdQ5PP/KAmOGdYetvtxEnjBssfdUK4kZ3SKkPWpEgrpMKwyoSxrBcX35AZStsEYcjYiulkH1eZtglObM7kWFSwELoONTnlBB9iuBT4mhyAMMs+VSM5sWE9wNDIVl/guZSHCfmgIFcIR9caz5OrAGextwPDXqcuALcjLlTdhrkMAC3Yy67mi04MQ34kPqSjgEvwtzG2/QF4JuYl0rgWL048QgMC+QHBWjuI/wGGM4mcMKyTnCuCeOtNrjWI/IpS/HvqiQf0aNC2W19oi9/PF/vdOoXvTRrlz+Ic/EDKlK8uDGx4VD5qF0ifV6Z0rAkMqRYdWaKr99hFrLyME9v72SXPg/PsMyprUnOvq1BXjVuLGHpw338el/DMtSLGkqDUt9cJjJEjYpSHxX3rEkL1Jv21ZpiABrc6m20ldbXaui7dVRnsd5raewnXX/6wZC2UcDfm9Hf7WkdHnp+jsrUoX3cKPgeHwwF2QwobjQQy26k8Xg4iS+1NL4CrIe28AAAAABJRU5ErkJggg==",
  iconSize: [35, 35],
  iconAnchor: [17.5, 35],
  popupAnchor: [0, -35]
});

class App extends Component {
  state = {
    location: {
      lat: 51.505,
      lng: -0.09
    },
    message: "Great Britan",
    zoom: 3,
    countries: [],
    countriesLoaded: false,
    error: null,
    searchText: "",
    flag: "https://restcountries.eu/data/gbr.svg",
    population: 65110000
  };

  locateMe = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        location: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        },
        message: "This is where I am right now!",
        flag: "",
        zoom: 13
      });
    });
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            countriesLoaded: true,
            countries: result
          });
        },
        error => {
          this.setState({
            countriesLoaded: true,
            error
          });
        }
      );
  }

  onSearchChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  countryInfo = obj => {
    this.setState({
      message: obj.name,
      flag: obj.flag,
      population: obj.population,
      capital: obj.capital,
      region: obj.region,
      language: obj.languages.name
    });
  };

  centerCountry = obj => {
    this.setState({
      location: {
        lat: obj.latlng[0],
        lng: obj.latlng[1]
      }
    });
    this.countryInfo(obj);
  };

  zoomInCountry = () => {
    this.setState({
      location: {
        lat: this.state.location.lat,
        lng: this.state.location.lng
      },
      zoom: 13
    });
  };

  render() {
    const center = [this.state.location.lat, this.state.location.lng];
    return (
      <div className="App">
        {/* <MapWrapper props={this.state} /> */}
        <Map className="map" center={center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.location} icon={myIcon}>
            <Popup>
              <Card>
                <CardImg
                  top
                  width="100%"
                  height="75px"
                  src={this.state.flag}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardContent value={this.state} />
                </CardBody>
              </Card>
            </Popup>
          </Marker>
        </Map>
        <Button className="locateBtn" onClick={this.locateMe} color="primary">
          Locate Me
        </Button>{" "}
        <Countries
          state={this.state}
          centerCountry={this.centerCountry}
          onSearchChange={this.onSearchChange}
        />
      </div>
    );
  }
}

export default App;
