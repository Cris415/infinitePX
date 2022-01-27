import React from "react";
import { Redirect } from "react-router-dom";
import Spinner from "../../../util/spinner";
import ImgInfoContainer from "./img_info_container";
import Comments from "../../comments/comments";
import BackButton from "./back_button";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.post) {
      this.props.fetchPost();
    }
  }

  render() {
    if (!this.props.post) return <div></div>;
    const { loading, errors, post, tags } = this.props;
    if (loading) return <Spinner />;

    return (
      <div className="post-show">
        {errors.length > 0 ? <Redirect to="/" /> : null}

        <div className="img-section">
          <BackButton />
          <img src={post.photoUrl} alt={post.title} />
        </div>

        <div className="info-container">
          <ImgInfoContainer post={post} tags={tags} />
          <Comments />
        </div>
      </div>
    );
  }
}

export default PostShow;
