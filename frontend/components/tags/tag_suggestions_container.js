import { connect } from 'react-redux';

import TagSuggestions from './tag_suggestions';

const mapStateToProps = (state) => ({
  results: Object.values(state.entities.tags).filter(
    (tag) => state.entities.tagSearchResultIds.includes(tag.id)
  ),
});


export default connect(mapStateToProps, mapDispatchToProps)(TagSuggestions);