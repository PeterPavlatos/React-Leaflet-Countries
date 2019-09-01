import React, { createContext, Component } from 'react';

export const SearchContext = createContext();

class SearchContextProvider extends Component {
    state ={
        searchText: ""
    }

    onSearchChange = e => {
        console.log("+++++++++++++++ onSearchChange", e.target.value);
        this.setState({
          searchText: e.target.value
        });
    };
    
    render() {
        return (
            <SearchContext.Provider value={{...this.state, onSearchChange: this.onSearchChange}}>
                {this.props.children}
            </SearchContext.Provider>
        )
    }
}

export default SearchContextProvider;