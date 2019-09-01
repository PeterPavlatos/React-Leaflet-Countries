import React, {useContext} from "react";
import { InputGroup, Input } from "reactstrap";
import { SearchContext } from './contexts/SearchContext';

const Search = () => {

    const { onSearchChange } = useContext(SearchContext);

    return (
      <InputGroup className="search-form">
        <Input onChange={onSearchChange} placeholder="Search" />
      </InputGroup>
    );
}

export default Search;
