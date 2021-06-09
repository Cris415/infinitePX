import React from 'react';

function TagSuggestions(props){
  console.log(props.results)
  return (
    <div>
      tag suggestions
      maybe use tag index here
      <ul>
        {props.results.map(result => <li>{result.name}</li>)}
      </ul>
    </div>
  )
}

export default TagSuggestions;