import React from 'react';
import { connect } from 'react-redux'
import Discover from '../Discover/discover';
import './searchBar.scss'

function SearchResults(props){
  if (props.drinks.length === 0){
    return (
      <div className="no-drinks">
        Sorry, no drinks found!
      </div>
    )
  }
  return(
    <Discover {...props} avoidFetch={true} />
  )
}

const msp = (state, ownProps) => ({
  drinks: Object.values(state.entities.drinks),
});

export default connect(msp)(SearchResults);
