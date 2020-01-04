import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import WrappedLoginScreen from "./Components/LoginScreen/LoginScreen"
import UnknownPath from "./Components/UnknownPath/UnknownPath"
import { WrappedLibrary } from "./Components/Library/Library"
import Preferences from "./Components/Preferences/Preferences"
import Requests from "./Components/Requests/Requests"
import WrappedHome from "./Components/Home/Home"
import { connect } from "react-redux"
import WrappedTop from "./Components/Top/Top"


function App(props) {
  //const dispatch = props.dispatch

  //Switch block is used to ensure that only one route is displayde at a time

  return(
    <div className="App">
      <BrowserRouter>
        {
          props.authenticated ?
        <div>
          <WrappedTop/>
          <Switch>
            <Route path='/' exact component={WrappedHome} />
            <Route path='/home' exact component={WrappedHome} />
            <Route path='/login' exact component={WrappedLoginScreen} />
            <Route path='/library' exact component={WrappedLibrary} />
            <Route path='/pref' exact component={Preferences} />
            <Route path='/' component={UnknownPath} />
          </Switch>
        </div>
        :
        <Route path='/' component={WrappedLoginScreen} />
        }
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.common.authenticated,
    nightmode: state.preferences.nightmode
  }
}

const WrappedApp = connect(mapStateToProps)(App)

export default WrappedApp;
