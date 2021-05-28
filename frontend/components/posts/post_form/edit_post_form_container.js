import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PostForm from './post_form';
import { fetchPost, editPost, deletePost } from '../../../actions/post_actions';
import { addTags, deleteTag } from "../../../actions/tag_actions";
import { clearErrors } from '../../../actions/error_actions';

class EditPost extends React.Component {  
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchPost();
  }

  render(){
    if (!this.props.post) return null
    
    const {formType, processForm, clearErrors, errors, post, currentUserId, deletePost, tags} = this.props;
    let preloadedPost = post;
    preloadedPost['originalTags'] = tags;
    preloadedPost['tags'] = [];
    // redirect if user is not author
    if (currentUserId !== post.userId) {
      return <Redirect to={`/posts/${this.props.match.params.postId}`} />;
    }

    // TODO: just pass {...this.props} 
    return (
      <div>
        <PostForm
          formType={formType}
          processForm={processForm}
          clearErrors={clearErrors}
          errors={errors}
          post={preloadedPost}
          deletePost={deletePost}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  formType: "Edit",
  post: state.entities.posts[ownProps.match.params.postId],
  errors: state.errors.posts,
  currentUserId: state.session.id,
  tags: Object.values(state.entities.tags)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (post, redirectCallback) =>
    dispatch(editPost(post, redirectCallback)),
  clearErrors: () => dispatch(clearErrors()),
  fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId)),
  deletePost: () => dispatch(deletePost(ownProps.match.params.postId)),
  addTags: (tags) => dispatch(addTags(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);