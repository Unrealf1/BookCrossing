import React from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import "./Top.css"


function Top(props) {
    const nightmode = props.nightmode
    const signClass = nightmode ? "topSign topSignNight" : "topSign"
    const linkClass = nightmode ? "topLink topLinkNight" : "topLink"
    return (
        <div className={signClass}>
            <span className={linkClass}>
                <Link to='/login'> 
                    Login
                </Link>
            </span>
            <span className={linkClass}>
                <Link to='/home'> 
                    Home
                </Link>
            </span>
            <span className={linkClass}>
                <Link to='/library'> 
                    Library
                </Link>
            </span>
            <span className={linkClass}>
                <Link to='/pref'> 
                    Settings
                </Link>
            </span>
            
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    nightmode: state.preferences.nightmode
  }
}

const WrappedTop = connect(mapStateToProps)(Top)

export default WrappedTop
