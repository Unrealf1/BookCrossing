import React from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import "./Top.css"


function Top(props) {
    const history = props.history
    console.log(history)
    return (
        <div className="topSign">
            <span className="topLink">
                <Link to='/login'> 
                    To login screen
                </Link>
            </span>
            <span className="topLink">
                <Link to='/home'> 
                    To home
                </Link>
            </span>
            <span className="topLink">
                <Link to='/library'> 
                    To library
                </Link>
            </span>
            <span className="topLink">
                <Link to='/pref'> 
                    To the settings!
                </Link>
            </span>
            <span className="topLink">
                <Link to='/requests'> 
                    Missile incoming!
                </Link>
            </span>
            
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const WrappedTop = connect(mapStateToProps)(Top)

export default WrappedTop
