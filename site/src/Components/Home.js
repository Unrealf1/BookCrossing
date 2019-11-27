import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"


function Home(props) {
  const history = props.history;
  return(
    <div>
        <div>Here should be home page</div>
        <div>
            <span>
            <Link to='/login'> 
                To login screen
            </Link>
            </span>
            <span> or you can press this lovely button:</span>
            <button 
                onClick={()=> {
                    //Do stuff
                    history.push('/login')
                }}
            >Press me ;)</button>
        </div>
        <div>
            <Link to='/library'> 
                To library managment
            </Link>
        </div>
        <div>
            <Link to='/pref'> 
                To the settings!
            </Link>
        </div>
        <div>
            <Link to='/requests'> 
                Missile incoming!
            </Link>
        </div>
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
