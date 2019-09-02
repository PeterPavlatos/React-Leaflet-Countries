import React, {useContext} from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { SearchContext } from './contexts/SearchContext';
import { FaTimes } from "react-icons/fa";

const Search = () => {

  const { searchText, onSearchChange, clearSearchText } = useContext(SearchContext);

  const test = searchText.length ? (
      <InputGroupAddon addonType="append">
          <InputGroupText onClick={clearSearchText} className="btnSearchInputClear"><FaTimes/></InputGroupText> 
      </InputGroupAddon>
   ) : (
      ""       
   )
    return (
      <InputGroup className="search-form">
        <Input value={searchText} onChange={onSearchChange} placeholder="Search" />
        {test}
      </InputGroup>
    );
}

export default Search;
