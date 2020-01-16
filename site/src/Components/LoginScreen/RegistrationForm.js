import React from "react";
import { connect } from "react-redux"
import { sha256 } from 'js-sha256';
import { actionSubmitLogin } from "../../Store/Auth/Actions"
import { actionAuthenticate } from "../../Store/Common/Actions"


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  

async function createUser(login, hash, id) {
    await fetch('http://127.0.0.1:8000/api/user/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, login: login,
         password_hash: hash, mail_index: 5, user_chosen_info: "I love trains" })
      })
}

function RegistrationForm(props) {
  const dispatch = props.dispatch
  const history = props.history
  return(
    <span className="login-screen-form">
        <h3>Sign up</h3>
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
                <button className="login-screen-button" type="button" onClick={(event)=>{
                    const login = document.getElementById("singup_login_textbox").value;
                    const password = document.getElementById("singup_password_textbox").value;
                    const password2 = document.getElementById("singup_password_repeat_textbox").value;
                    if (password !== password2) {
                        alert("Passwords differ!")
                        return;
                    } else {
                        console.log(`Created user with login ${login} and password ${password}`)
                        const hash = sha256(password)
                        const id = getRandomInt(1, 100000)
                        createUser(login, hash, id)
                        dispatch(actionSubmitLogin(login, id))
                        dispatch(actionAuthenticate)
                        history.push("/home") 
                    }  

                }}>Sing up</button>
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

const WrappedRegistrationForm = connect(mapStateToProps)(RegistrationForm)

export default WrappedRegistrationForm;
