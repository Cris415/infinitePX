import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import tagsReducer from './tags_reducer';
import tagSearchIdReducer from './tag_search_ids_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  tags: tagsReducer,
  tagSearchResultIds: tagSearchIdReducer
});

export default entitiesReducer;