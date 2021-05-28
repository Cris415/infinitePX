import React from 'react';

function TagIndex(props){
  // tags should be an array of strings
  function renderListItems(){
    return props.tags.map((tag, i) => (
    <li key={`${tag}-${i}`} className="tag-list-item" onClick={props.action}> 
      {tag} 
    </li>) )
  }

  return (
  <ul className="tag-list"> 
    {renderListItems()}
  </ul>
  )
}

export default TagIndex;