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
    return (
      <button className="btn" onClick={this.handleClick}>
        {this.state.following ? 'Unfollow' : 'Follow'}
      </button>
    )
  }

}

export default FollowButton;