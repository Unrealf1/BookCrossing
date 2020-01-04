import React from "react";
import { connect } from "react-redux"


function Search(props) {
  return(
    <span className="home-search">
        <h4>Search:</h4>
        <input type="form"></input>
    </span>
  )
};

const mapStateToProps = (state) => {
    return {
    }
}

const WrappedSearch = connect(mapStateToProps)(Search)

export default WrappedSearch;
