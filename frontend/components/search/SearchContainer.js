import { connect } from 'react-redux';
import SearchBar from './searchBar';
import { searchDrinks } from '../../actions/drink_actions';

const mapDispatchToProps = dispatch => ({
  searchDrinks:  searchTerm => dispatch(searchDrinks(searchTerm))
});


export default connect(null, mapDispatchToProps)(SearchBar)