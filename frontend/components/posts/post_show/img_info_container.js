import { connect } from "react-redux";
import ImgInfo from "./img_info";
import { postAuthorSelector } from "../../../selectors/post_author_selector";

import { searchPosts } from "../../../actions/post_actions";

const mapStateToProps = (state, ownProps) => ({
  author: postAuthorSelector(state, ownProps.post.id),
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  searchPosts: (searchTerm) => dispatch(searchPosts(searchTerm, "tag")),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImgInfo);