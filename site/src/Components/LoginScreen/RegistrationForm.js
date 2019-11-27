import React from "react";
import { connect } from "react-redux"


function RegistrationForm(props) {
  //const history = props.history;
  return(
    <div>
        <h3>Sing up</h3>
        <form>
            <div>
                <input type="text"
                        name="login"
                        autoComplete="off" 
                        placeholder="Login" 
                        spellCheck="false"
                        id="singup_login_textbox">
                </input>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" id="singup_password_textbox"></input>
            </div>
            <div>
                <input type="password" name="password" placeholder="Repeat password" id="singup_password_repeat_textbox"></input>
            </div>
            <div>
                <button type="button" onClick={(event)=>{
                    const login = document.getElementById("singup_login_textbox").value;
                    const password = document.getElementById("singup_password_textbox").value;
                    const password2 = document.getElementById("singup_password_repeat_textbox").value;
                    if (password !== password2) {
                        alert("Passwords differ!")
                        return;
                    } else {
                        console.log(`Got user with login ${login} and password ${password}`)
                    }

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

const WrappedRegistrationForm = connect(mapStateToProps)(RegistrationForm)

export default WrappedRegistrationForm;
