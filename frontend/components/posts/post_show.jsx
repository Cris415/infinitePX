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
      <div>
        <h2>{title}</h2>
        <p>Created at: {date.toLocaleDateString()}</p>
        <p> {description} </p>
        <p>by: {author.username}</p>
      </div>
    );
  }

}

export default PostShow;