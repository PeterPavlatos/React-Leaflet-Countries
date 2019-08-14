import React, { createContext, Component } from 'react';

export const CountryContext = createContext();

class CountryContextProvider extends Component {
    state ={
        countries: [],
        countriesLoaded: false,
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                countriesLoaded: true,
                countries: result
                });
                console.log("+++++++++++ countries:", result );
                //this.locateMe();
            },
            error => {
                this.setState({
                countriesLoaded: true,
                error
                });
            }
        );
    }

    render() {
        return (
            <CountryContext.Provider value={{...this.state}}>
                {this.props.children}
            </CountryContext.Provider>
        )
    }
}

export default CountryContextProvider;
