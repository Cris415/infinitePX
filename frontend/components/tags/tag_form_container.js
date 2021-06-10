import { connect } from "react-redux";
import { searchTags, clearTagSearch } from "../../actions/tag_actions";

import TagForm from "./tag_form";

const mapStateToProps = (state) => ({
  results: Object.values(state.entities.tags).filter((tag) =>
    state.entities.tagSearchResultIds.includes(tag.id)
  ),
});

const mapDispatchToProps = (dispatch) => ({
  searchTags: (searchTerm) => dispatch(searchTags(searchTerm)),
  clearTagSearch: () => dispatch(clearTagSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagForm);
