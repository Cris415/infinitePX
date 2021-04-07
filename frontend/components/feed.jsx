import React from "react";
import { connect } from 'react-redux';
import PostIndexContainer from './posts/post_index_container';



const feed = props => {
  return (
    <div className="splash">
      <h1>Home Feed</h1>
      <p>See photos from other photographers</p>

      <PostIndexContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id]
})


export default connect(mapStateToProps)(feed);
