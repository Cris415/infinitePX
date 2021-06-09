import { connect } from "react-redux";
import { searchTags } from '../../actions/tag_actions';

import TagForm from "./tag_form";

const mapDispatchToProps = (dispatch) => ({
  searchTags: (searchTerm) => dispatch(searchTags(searchTerm))
})

export default connect(null, mapDispatchToProps)(TagForm);
