import React from "react";
import { connect } from "react-redux"
import "../Common/Common.css"
import Notifications from "./Notifications"
import Search from "./Search"


function Home(props) {
  const history = props.history;
  return(
    <div className="common-page-container">
        <Search></Search>
        <Notifications></Notifications>
    </div>
  )
};

const mapStateToProps = (state) => {
    return {
      authenticated: state.authenticated
    }
}

const WrappedHome = connect(mapStateToProps)(Home)

export default WrappedHome;
