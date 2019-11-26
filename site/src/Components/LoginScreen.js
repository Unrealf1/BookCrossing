import React from "react"
import { Link } from "react-router-dom";
import { actions } from "../Actions"
import { connect } from "react-redux"

function LoginScreen(props) {
  const dispatch = props.dispatch
  return(
    <div>
        <div> Here should be login screen</div>
        <Link to='/'> go to homepage</Link>
        <button onClick={() => {dispatch(actions.actionAuthenticate)}}> Authenticate </button>
        {props.authenticated
                  ? <p>Already logged in!</p>
                  : <p>Please log in</p>
              }

    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

const WrappedLoginScreen = connect(mapStateToProps)(LoginScreen)

export default WrappedLoginScreen
