import React from 'react';

class FollowButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      following: this.props.currentUser.follows.includes(this.props.user.id),
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    e.preventDefault();
    if (this.state.following ) {
      this.props.deleteFollow().then(() => this.setState({following: false}))
      
    } else {
      this.props.createFollow().then(() => this.setState({following: true}))
    }
  }

  render(){
    const followingStr = this.state.following ? 'Unfollow' : 'Follow';
    
    // Return null if the user is viewing their own page
    if (this.props.currentUser.id === this.props.user.id) return null;
    return (
      <button className={`btn btn-${followingStr.toLowerCase()}`} onClick={this.handleClick}>
        {followingStr}
      </button>
    )
  }

}

export default FollowButton;