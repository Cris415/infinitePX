import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login } from "../../actions/session_actions";
import { clearErrors } from "../../actions/error_actions";

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
