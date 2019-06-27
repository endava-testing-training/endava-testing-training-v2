import React from 'react';
import SearchField from "react-search-field";


export default class SearchBarBT extends React.Component {

  render() {
    return (
      <SearchField
        placeholder="Search..."
        searchText="This is initial search text"
        classNames="test-class"
      />
    );
  }
}