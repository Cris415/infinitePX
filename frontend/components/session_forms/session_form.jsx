import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.loginDemo({ username: "demo_user", password: "password" });
  }

  handleChange(label) {
    return (e) => {
      this.setState({ [label]: e.currentTarget.value });
    };
  }

  renderHeader() {
    return this.props.formType === "login" ? (
      <h1>Log in to InfinitePx</h1>
    ) : (
      <div>
        <h1>Join InfinitePx</h1>
        <p>Discover, share incredible photos, and gain global exposure.</p>
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

  renderErrors() {
    const errs = this.props.errors.map((err, i) => {
      return <li key={i}>{err}</li>;
    });
    return this.props.errors ? errs : "&nbsp;";
  }

  render() {
    return (
      <div className="session_form">
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
              placeholder={
                this.props.formType === "signup" ? "(minimum 8 characters)" : ""
              }
            />
          </label>
          <ul className="errors">{this.renderErrors()}</ul>
          <input
            type="submit"
            className="btn submit-btn"
            value={this.props.formType === "login" ? "Log in" : "Sign up"}
          />
          <br/>
          <button className="btn btn-inverse" onClick={this.handleDemoLogin}>Demo Log in</button>

          {this.renderLink()}
        </form>
      </div>
    );
  }
}

export default SessionForm;