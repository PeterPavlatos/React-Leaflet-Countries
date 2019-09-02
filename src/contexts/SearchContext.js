import React, { createContext, Component } from 'react';

export const SearchContext = createContext();

class SearchContextProvider extends Component {
    state ={
        searchText: ""
    }

    clearSearchText = () => {
        
        console.log("+++++++++++++++ clearSearchText");
        this.setState({
            searchText: ""
        });
    }

    onSearchChange = e => {
        e.preventDefault();
        //console.log("+++++++++++++++ onSearchChange", e.target.value);
        this.setState({
          searchText: e.target.value
        });
    };
    
    render() {
        return (
            <SearchContext.Provider value={{...this.state, onSearchChange: this.onSearchChange, clearSearchText: this.clearSearchText}}>
                {this.props.children}
            </SearchContext.Provider>
        )
    }
}

export default SearchContextProvider;