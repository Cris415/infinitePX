import React from 'react';

function TagIndex(props){
  function renderListItems(){
    return props.tags.map(tag => <li key={tag.id} className="tag-list-item"> {tag.name} </li> )
  }

  return (<ul className="tag-list"> 
    {renderListItems()}
  </ul>)
}

export default TagIndex;