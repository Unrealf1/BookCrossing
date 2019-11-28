import React from "react";
import { connect } from "react-redux"


function Home(props) {
  const history = props.history;
  return(
    <div>
        <div>Here should be home page</div>
        <div>
            <span> or you can press this lovely button:</span>
            <button 
                onClick={()=> {
                    //Do stuff
                    history.push('/login')
                }}
            >Press me ;)</button>
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
