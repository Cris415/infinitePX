import React from "react";

/*
Tag Types: 
'show': For the post show page, look like typical tags.
'remove': For form where a tag can be removed. 
'list': For suggestions. Typical list styling, click to add.
*/

function TagIndex(props) {
  // tags should be an array of strings
  function handleClick(tag) {
    const { tagType, addTag, search } = props;

    if (tagType === "show") {
      search(tag)();
    } else if (tagType === "list") {
      addTag(tag.toLowerCase());
      // props.clearCursor();
    }
  }

  function renderListItems() {
    return props.tags.map((tag, i) => (
      <li
        key={`${tag}-${i}`}
        className={`tag-list-item tag-list-item-${props.tagType} ${props.cursor === i ? 'tag-active' : ''}`}
        onClick={() => handleClick(tag)}
      >
        <span className="tag-list-item-content">{tag}</span>

        {props.tagType === "remove" && (
          <span onClick={props.remove(tag)} className="tag-list-item-icon">
            ╳
          </span>
        )}
      </li>
    ));
  }

  return <ul className="tag-list">{renderListItems()}</ul>;
}

export default TagIndex;
