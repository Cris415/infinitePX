import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, editPost } from '../../../actions/post_actions';
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

    const {formType, processForm, clearErrors, errors, post} = this.props;

    return(
      <div>

        <PostForm 
        formType={formType}
        processForm={processForm}
        clearErrors={clearErrors}
        errors={errors}
        post={post}
        /> 

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  formType: 'Edit',
  post: state.entities.posts[ownProps.match.params.postId],
  errors: state.errors.posts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (post, redirectCallback) =>
  dispatch(editPost(post, redirectCallback)),
  clearErrors: () => dispatch(clearErrors()),
  fetchPost: () => dispatch(fetchPost(ownProps.match.params.postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);