import React from 'react';

class PostShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchPost();
  }

  render(){
    if (!this.props.post ) return <div></div>;
    
    const {title, description, createdAt} = this.props.post;
    const {author} = this.props;
    const date = new Date(createdAt);

    return (
      <div className="post-show">
        <div className="img-section">
          <img src={this.props.post.photoUrl} alt={title} />
        </div>
        <div className="info-container">
          <div className="img-info">
            <h2>{title}</h2>
            <p className="author">by {author.username}</p>

            <div className="date-info">
              <strong>Uploaded: </strong>
              <span> {date.toLocaleDateString()} </span>
            </div>
            <p className="description"> {description} </p>
          </div>
        </div>
      </div>
    );
  }

}

export default PostShow;