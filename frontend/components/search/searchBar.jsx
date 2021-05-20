import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState(props.preloadedSearch);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if (searchTerm.length > 0){
      props.searchPosts(searchTerm);
      if (props.searchType === "bar") setSearchTerm('');
      props.history.push(`/results/${searchTerm}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} id="search-bar" className={props.searchType}>
      {props.searchType === "bar" && <FontAwesomeIcon icon={faSearch} />}
      <input
        type="text"
        name="search"
        placeholder="Search InfinitePx"
        onChange={handleChange}
        value={searchTerm}
      />
      {props.searchType === "searchPage" && (
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      )}
    </form>
  );

}

export default withRouter(SearchBar);