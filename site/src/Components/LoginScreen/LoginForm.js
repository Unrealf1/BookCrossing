import React from "react";
import { connect } from "react-redux"
import { actionAuthenticate } from "../../Store/Common/Actions"
import { withRouter } from 'react-router-dom';
import { sha256 } from 'js-sha256';
import { actionSubmitLogin } from "../../Store/Auth/Actions"


async function checkUser(userToCheck) {
  const response = await fetch("http://127.0.0.1:8000/api/user")
  const users = await response.json()
  for (var i = 0; i < users.length; i++) {
    if (users[i].login === userToCheck.login
      && users[i].password_hash === userToCheck.password_hash) {
        return users[i].id
      }
  }
  console.log("Did not find user")
  return -1
}

function LoginForm(props) {
  const history = props.history;
  const dispatch = props.dispatch
  return(
    <span className="login-screen-form">
        <h3>Sign in</h3>
        <form>
            <div>
                <input type="text"
                        name="login"
                        autoComplete="off" 
                        placeholder="Login" 
                        spellCheck="false"
                        id="singin_login_textbox">
                </input>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" id="singin_password_textbox"></input>
            </div>
            <div>
                <button className="login-screen-button" type="button" onClick={(event)=>{
                  const login = document.getElementById("singin_login_textbox").value;
                  const password = document.getElementById("singin_password_textbox").value;
                  
                  const hash = sha256(password)

                  checkUser({login: login, password_hash: hash}).then ((response) => {
                    if (response > 0) {
                      dispatch(actionSubmitLogin(login, response))
                      dispatch(actionAuthenticate)
                      history.push("/home")
                    } else {
                      alert("No such user")
                    }
                  })

                  }}>Sign in</button>
            </div>
        </form>
    </span>
  )
};

const mapStateToProps = (state) => {
    return {
      authenticated: state.authenticated
    }
}

const WrappedLoginForm = connect(mapStateToProps)(LoginForm)

export default withRouter(WrappedLoginForm);
