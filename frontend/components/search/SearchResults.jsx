import React from "react";
import { connect } from "react-redux";
import PostIndex from "../posts/post_index/post_index";
import { searchPosts } from '../../actions/post_actions';
import SearchPageBarContainer from "./SearchPageBarContainer";

class SearchResults extends React.Component {
  constructor(props){
    super(props)
  } 
  componentDidMount(){
    this.props.search();
  }

  render(){
    return (
      <div>
        <SearchPageBarContainer searchTerm={this.props.searchTerm} />
        <PostIndex {...this.props} />
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
  users: state.entities.users,
  loading: state.ui.loading,
  indexType: "searchIndex",
  searchTerm: ownProps.location.pathname.split("/")[2],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  search: () =>
    dispatch(searchPosts(ownProps.location.pathname.split("/")[2])),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
