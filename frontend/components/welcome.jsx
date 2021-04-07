import React from "react";
import { connect } from 'react-redux'


const Welcome = props => {
  return (
    <div className="splash">
      
      <h1>Welcome, {props.user.username}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id]
})


export default connect(mapStateToProps)(Welcome);
