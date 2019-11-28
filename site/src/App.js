import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import WrappedLoginScreen from "./Components/LoginScreen/LoginScreen"
import UnknownPath from "./Components/UnknownPath/UnknownPath"
import Library from "./Components/Library/Library"
import Preferences from "./Components/Preferences/Preferences"
import Requests from "./Components/Requests/Requests"
import WrappedHome from "./Home/Home"
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
            <Route path='/login' component={WrappedLoginScreen} />
            <Route path='/library' component={Library} />
            <Route path='/pref' component={Preferences} />
            <Route path='/requests' component={Requests} />
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
    authenticated: state.common.authenticated
  }
}

const WrappedApp = connect(mapStateToProps)(App)

export default WrappedApp;
