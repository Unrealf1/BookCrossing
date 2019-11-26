import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import WrappedLoginScreen from "./Components/LoginScreen"
import UnknownPath from "./Components/UnknownPath"
import Library from "./Components/Library"
import Preferences from "./Components/Preferences"
import Requests from "./Components/Requests"
import WrappedHome from "./Components/Home"
import { connect } from "react-redux"

function App(props) {
  const dispatch = props.dispatch

  //Switch block is used to ensure that only one route is displayde at a time
  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={WrappedHome} />
          <Route path='/home' exact component={WrappedHome} />
          <Route path='/login' component={WrappedLoginScreen} />
          <Route path='/library' component={Library} />
          <Route path='/pref' component={Preferences} />
          <Route path='/requests' component={Requests} />
          <Route path='/' component={UnknownPath} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

const WrappedApp = connect(mapStateToProps)(App)

export default WrappedApp;
