import React from "react";
import { connect } from "react-redux"
import { actionAuthenticate } from "../../Store/Common/Actions"
import { withRouter } from 'react-router-dom';


function LoginForm(props) {
  console.log(`props are`)
  console.log(props)
  const history = props.history;
  const dispatch = props.dispatch
  return(
    <div>
        <h3>Sing in</h3>
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
                <button type="button" onClick={(event)=>{
                  console.log(event)
                  const login = document.getElementById("singin_login_textbox").value;
                  const password = document.getElementById("singin_password_textbox").value;
                  console.log(login)
                  console.log(password)

                  dispatch(actionAuthenticate)
                  history.push("/home")

                  }}>Sing in</button>
            </div>
        </form>
    </div>
  )
};

const mapStateToProps = (state) => {
    return {
      authenticated: state.authenticated
    }
}

const WrappedLoginForm = connect(mapStateToProps)(LoginForm)

export default withRouter(WrappedLoginForm);
