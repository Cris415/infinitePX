import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../../../util/spinner';

class PostShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchPost();
  }

  render(){
    if (!this.props.post ) return <div></div>;

    const { title, description, createdAt } = this.props.post;
    const {author} = this.props;
    const date = new Date(createdAt);

    if (this.props.loading) return <Spinner />;

    return (
      <div className="post-show">
        
        {this.props.errors.length > 0 ? <Redirect to="/" /> : null }

        <div className="img-section">
          <img src={this.props.post.photoUrl} alt={title} />
        </div>
        <div className="info-container">
          <div className="img-info">
            <div className="img-info-main">
              <h2>{title}</h2>
              <p className="author">
                by <Link to={`/users/${author.id}`} > {author.username}</Link>
              </p>
            </div>

            <div className="date-info">
              <strong>Uploaded: </strong>
              <span> {date.toLocaleDateString()} </span>
            </div>
            <p className="description"> {description} </p>

            {this.props.currentUserId === author.id && (
              <Link
                className="edit"
                to={`/${this.props.match.params.postId}/edit`}
              >
                Edit Photo
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

}

export default PostShow;