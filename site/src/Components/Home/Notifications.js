import React from "react";
import { connect } from "react-redux"


function Notifications(props) {
  return(
    <span className="home-notifications">
        <h4>Notifications:</h4>
        <ol>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
        </ol>
    </span>
  )
};

const mapStateToProps = (state) => {
    return {
    }
}

const WrappedNotifications = connect(mapStateToProps)(Notifications)

export default WrappedNotifications;
