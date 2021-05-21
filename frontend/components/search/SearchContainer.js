import { connect } from 'react-redux';
import SearchBar from './searchBar';
import { searchPosts } from '../../actions/post_actions';

const mapDispatchToProps = (dispatch) => ({
  searchPosts: (searchTerm) => dispatch(searchPosts(searchTerm)),
});

const mapStateToProps = (state) => ({
  searchType: "bar",
  preloadedSearch: "",
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);