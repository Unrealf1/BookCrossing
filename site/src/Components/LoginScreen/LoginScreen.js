import React from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import WrappedLoginForm from "./LoginForm";
import WrappedRegistrationForm from "./RegistrationForm";
import "./LoginScreen.css"
import "../Common/Common.css"
import UserList from "./UserList"

function TrueLoginScreen(props) {
  return(
    <div>
        <div className="login-screen-container">
          <WrappedLoginForm/>
          <WrappedRegistrationForm/>
        </div>
    </div>
  )
};

function LoginScreen(props) {
  if (props.authenticated) {
    return (
      <div className="common-page-container">
        <p>Already logged in</p>
        <Link to='/'> go to homepage</Link>
        <UserList/>
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
