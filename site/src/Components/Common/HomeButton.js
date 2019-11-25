import React from "react"
import { withRouter } from 'react-router-dom';


function HomeButton({history}) {
  return(
    <button 
        onClick={()=> {
            //Do stuff
            history.push('/')
        }}
    >Fuck go back</button>
  )
};

export default withRouter(HomeButton);
