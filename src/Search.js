import React from "react";
import { InputGroup, Input } from "reactstrap";

const Search = ({onSearchChange}) => {
    return (
      <InputGroup className="search-form">
        <Input onChange={onSearchChange} placeholder="Search" />
      </InputGroup>
    );
}

export default Search;
