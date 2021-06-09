import { connect } from "react-redux";
import { searchTags, clearTagSearch } from "../../actions/tag_actions";

import TagForm from "./tag_form";

const mapDispatchToProps = (dispatch) => ({
  searchTags: (searchTerm) => dispatch(searchTags(searchTerm)),
  clearTagSearch: () => dispatch(clearTagSearch()),
});

export default connect(null, mapDispatchToProps)(TagForm);
