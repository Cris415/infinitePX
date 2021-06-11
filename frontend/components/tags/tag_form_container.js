import { connect } from "react-redux";
import React from 'react'
import { searchTags, clearTagSearch } from "../../actions/tag_actions";

import TagForm from "./tag_form";

const mapStateToProps = (state) => {
  const results = Object.values(state.entities.tags).filter((tag) =>
    state.entities.tagSearchResultIds.includes(tag.id)
  )
  return  {
  results ,
  resultRefs: results.reduce((acc, value) => {
    acc[value.name] = React.createRef();
    return acc;
  }, {}),
}
}

const mapDispatchToProps = (dispatch) => ({
  searchTags: (searchTerm) => dispatch(searchTags(searchTerm)),
  clearTagSearch: () => dispatch(clearTagSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef:true})(TagForm);
