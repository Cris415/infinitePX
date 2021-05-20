import { connect } from 'react-redux';
import SearchBar from './searchBar';
import { searchPosts } from '../../actions/post_actions';

const mapDispatchToProps = (dispatch) => ({
  searchPosts: (searchTerm) => dispatch(searchPosts(searchTerm)),
});

const mapStateToProps = (state, ownProps) => {
 return {
   searchType: "searchPage",
   preloadedSearch: ownProps.searchTerm,
 };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);