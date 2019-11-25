import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import LoginScreen from "./Components/LoginScreen"
import UnknownPath from "./Components/UnknownPath"
import Library from "./Components/Library"
import Preferences from "./Components/Preferences"
import Requests from "./Components/Requests"

function App() {
  //Switch block is used to ensure that only one route is displayde at a time
  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/library' component={Library} />
          <Route path='/pref' component={Preferences} />
          <Route path='/requests' component={Requests} />
          <Route path='/' component={UnknownPath} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
