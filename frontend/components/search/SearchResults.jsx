import React from "react";
import { connect } from "react-redux";
import PostIndex from "../posts/post_index/post_index";
import SearchPageBarContainer from "./SearchPageBarContainer";

function SearchResults(props) {
  return (
    <div>
      <SearchPageBarContainer searchTerm={props.searchTerm} />
      <PostIndex {...props} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
  users: state.entities.users,
  loading: state.ui.loading,
  indexType: "searchIndex",
  searchTerm: ownProps.location.pathname.split("/")[2],
});

export default connect(mapStateToProps)(SearchResults);
