import React from "react"
import { Link } from "react-router-dom";
import { actionAuthenticate } from "../Store/Common/Actions"
import { connect } from "react-redux"
import WrappedLoginForm from "./LoginScreen/LoginForm";
import WrappedRegistrationForm from "./LoginScreen/RegistrationForm";

function TrueLoginScreen(props) {
  const dispatch = props.dispatch
  return(
    <div>
        <div>
          <WrappedLoginForm/>
          <WrappedRegistrationForm/>
        </div>
        <button onClick={() => {dispatch(actionAuthenticate)}}> Authenticate </button>
    </div>
  )
};

function LoginScreen(props) {
  if (props.authenticated) {
    return (
      <div>
        <p>Already logged in</p>
        <Link to='/'> go to homepage</Link>
      </div>
    )
  } else {
    return (
      <TrueLoginScreen/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.common.authenticated
  }
}

const WrappedLoginScreen = connect(mapStateToProps)(LoginScreen)

export default WrappedLoginScreen
