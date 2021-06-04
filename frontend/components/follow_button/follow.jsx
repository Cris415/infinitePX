import React from "react";

class Follow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: this.props.currentUser.follows.includes(this.props.user.id),
      followStr: "Follow",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.setState({ followStr: this.state.following ? "Following" : "Follow" });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.following) {
      this.props.deleteFollow().then(() => {
        this.setState({ following: false, followStr: "Follow" });
        this.props.fetchUser();
      });
    } else {
      this.props.createFollow().then(() => {
        this.setState({ following: true, followStr: "Following" });
        this.props.fetchUser();
      });
    }
  }

  handleHover(type) {
    return () => {
      if (this.state.following === true) {
        this.setState({ followStr: type });
      }
    };
  }

  renderFollow() {
    const { followStr } = this.state;
    if (this.props.followType === "inline") {
      return (
        <span
          className={`link-btn link-btn-${followStr.toLowerCase()}`}
          onClick={this.handleClick}
          onMouseEnter={this.handleHover("Unfollow")}
          onMouseLeave={this.handleHover("Following")}
        >
          {followStr}
        </span>
      );
    } else {
      return (
        <button
          className={`btn btn-${followStr.toLowerCase()}`}
          onClick={this.handleClick}
          onMouseEnter={this.handleHover("Unfollow")}
          onMouseLeave={this.handleHover("Following")}
        >
          {followStr}
        </button>
      );
    }
  }

  render() {
    // Return null if the user is viewing their own page
    if (this.props.currentUser.id === this.props.user.id) return null;
    return <> {this.renderFollow()} </>;
  }
}

export default Follow;
