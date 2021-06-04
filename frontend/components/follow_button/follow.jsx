import React from "react";

class Follow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: this.props.currentUser.follows.includes(this.props.user.id),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.following) {
      this.props.deleteFollow().then(() => {
        this.setState({ following: false });
        this.props.fetchUser();
      });
    } else {
      this.props.createFollow().then(() => {
        this.setState({ following: true });
        this.props.fetchUser();
      });
    }
  }

  renderFollow() {
    const followingStr = this.state.following ? "Unfollow" : "Follow";
    if (this.props.followType === "inline") {
      return (
        <span
          className={`follow-${followingStr.toLowerCase()}`}
          onClick={this.handleClick}
        >
          {followingStr}
        </span>
      );
    } else {
      return (
        <button
          className={`btn btn-${followingStr.toLowerCase()}`}
          onClick={this.handleClick}
        >
          {followingStr}
        </button>
      );
    }
  }

  render() {
    // Return null if the user is viewing their own page
    if (this.props.currentUser.id === this.props.user.id) return null;
    {
      this.renderFollow();
    }
  }
}

export default Follow;
