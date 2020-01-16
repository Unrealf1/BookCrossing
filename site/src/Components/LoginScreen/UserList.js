import React, { useEffect } from "react"
import { connect } from "react-redux"


async function postUser() {
    await fetch('http://127.0.0.1:8000/api/book/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: 7,name: "Песнь заполярного огурца",
         owner_id: "17", taken_by_id: "17" })
      })
}

async function fetchUsers() {
    const res = await fetch("http://127.0.0.1:8000/api/user")
    .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
}

function User(props) {

}

function UserList(props) {
    // useEffect(() => {
    //     fetchUsers()
    //   })

    fetchUsers()
    postUser()

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
  }

const WrappedUserList = connect(mapStateToProps)(UserList)

export default WrappedUserList
