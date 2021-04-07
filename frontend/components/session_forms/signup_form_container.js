import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clearErrors, login } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'signup',
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  loginDemo: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
