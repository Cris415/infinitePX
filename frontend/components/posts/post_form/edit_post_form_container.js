import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost } from '../../../actions/post_actions';
import { clearErrors } from '../../../actions/error_actions';
//  we would import editPost ^ but I have to make it first


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
  post: state.entities.posts[ownProps.match.params.postId],
  formType: 'Edit',
  errors: state.errors.posts
});

const mapDispatchToProps = (dispatch) => ({
  processForm: post => dispatch(editPost(post)),
  clearErrors: () => dispatch(clearErrors()),
  fetchPost: () => dispatch(fetchPost)
});

connect(mapStateToProps, mapDispatchToProps)(EditPost);