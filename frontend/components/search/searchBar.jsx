import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if (searchTerm.length > 0){
      props.searchDrinks(searchTerm);
      setSearchTerm('');
      props.history.push(`/results`);
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        name="search"
        placeholder="Search Drinks!"
        onChange={handleChange}
        value={searchTerm}
      />
      <input type="submit" value="Search" />
    </form>
  );

}

export default withRouter(SearchBar);