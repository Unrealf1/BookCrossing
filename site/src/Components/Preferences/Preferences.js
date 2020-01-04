import React from "react"
import { connect } from "react-redux"
import HomeButton from "../Common/HomeButton"
import "../Common/Common.css"
import "./NightmodeButton.css"
import { actionToggleNightMode } from "../../Store/Preferences/Actions"


function Preferences(props) {
  const dispatch = props.dispatch
  return(
    <div className="common-page-container">
        Here you can change some settings
        <HomeButton/>
        <div>
          Nightmode: <input type="checkbox" onClick={()=>{dispatch(actionToggleNightMode)}}/>
        </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    nightmode: state.preferences.nightmode
  }
}

const WrappedPreferences = connect(mapStateToProps)(Preferences)
export default WrappedPreferences
