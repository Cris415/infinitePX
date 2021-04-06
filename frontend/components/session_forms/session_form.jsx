import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => {
      this.setState({
        username: "",
        password: ""
      });
      return <Redirect to='/' />
    })
  }

  handleChange(label) {
    return (e) => {
      this.setState({ [label]: e.currentTarget.value });
    };
  }

  renderHeader() {
    return this.props.formType === "login" ? (
      <h1>Log in to infinitePx</h1>
    ) : (
      <div>
        <h1>Join infinitePx</h1>
        <p>Discover and share incredible photos, and gain global exposure.</p>
      </div>
    );
  }

  renderLink() {
    return this.props.formType === "login" ? (
      <p>
        Don't have an account?
        <Link to="/signup">Sign Up</Link>
      </p>
    ) : (
      <p>
        Already have an account?
        <Link to="/login">Log in</Link>
      </p>
    );
  }

  renderErrors(){
    return this.props.errors ? this.props.errors : null
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderHeader()}
        <label>
          Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange("username")}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            placeholder={this.props.formType === 'signup' ? "(minimum 8 characters)" : ''}
          />
        </label>

        {this.renderErrors()}

        <input type="submit" value={this.props.formType}/>
        {this.renderLink()}
      </form>
    );
  }
}

export default SessionForm;