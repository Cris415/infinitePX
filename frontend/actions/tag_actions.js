import * as tagAPI from "../util/tag_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const REMOVE_TAG = "REMOVE_TAG";

export const receiveTags = (post) => ({
 type: RECEIVE_TAGS,
  tags : post.tags,
  post: post.post
})

export const removeTag = (post) => ({
 type: RECEIVE_TAGS,
  tags : post.tags
})

export const addTags = tags => dispatch => (
  tagAPI.addTags(tags)
  .then(post => dispatch(receiveTags(post)))
)

export const deleteTag = (tagId, postId) => dispatch => (
  tagAPI.deleteTag(tagId, postId)
  .then((post) => {
    dispatch(receiveTags(post))
  })
)

export const searchTags = (searchTerm) => dispatch => (
  tagAPI.searchTags(searchTerm).then(tags => dispatch(receiveTags(tags)))
)