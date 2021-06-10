import React from 'react';
import TagIndex from './tag_index';

function TagSuggestions(props){
  return (
    <div className="tag-suggestions">
      <TagIndex
        tags={props.results.map((result) => result.name)}
        tagType="list"
        addTag={props.addTag}
        cursor={props.cursor}
        clearCursor={props.clearCursor}
      />
    </div>
  );
}

export default TagSuggestions;