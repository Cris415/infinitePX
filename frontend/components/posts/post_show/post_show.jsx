import React from 'react';
import { Link } from 'react-router-dom';

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

    return (
      <div className="post-show">
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