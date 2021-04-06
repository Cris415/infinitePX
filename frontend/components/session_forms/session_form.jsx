import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleChange(label){
    return e => {
      this.setState({ [label] : e.currentTarget.value });
    };
  }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <label> Username
        <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
      </label>

    </form>
    );
  }
}

export default SessionForm;