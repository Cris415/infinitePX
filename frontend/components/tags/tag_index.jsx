import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TagIndex(props) {
  // tags should be an array of strings
  function renderListItems() {
    const tagClass =
      props.tagType === "show" ? "tag-list-item-show" : "tag-list-item-remove";
    return props.tags.map((tag, i) => (
      <li
        key={`${tag}-${i}`}
        className={`tag-list-item ${tagClass}`}
        onClick={props.tagType === "show" ?  props.search(tag) : () => {}}
      >
        <span className="tag-list-item-content">
          {/* {tag.length > 28 ? tag.slice(0, 27) + '...' : tag} */}
        {tag}
        </span>
        {props.tagType === "remove" && (
          <span onClick={props.remove(tag)} className="tag-list-item-icon" >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        )}
      </li>
    ));
  }

  return <ul className="tag-list">{renderListItems()}</ul>;
}

export default TagIndex;
