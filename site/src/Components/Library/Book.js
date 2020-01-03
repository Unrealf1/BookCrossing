import React from "react"
import { connect } from "react-redux"
import { actionRemoveBook } from "../../Store/Library/Actions"


function Book(props) {
  const name = props.name
  const author = props.author
  const id = props.book_id
  const dispatch = props.dispatch

  return(
    <li>
      Name: {name} Author: {author}
      <button className="book-remove-button" type="button" 
        onClick={()=>{dispatch(actionRemoveBook(id))}}>X</button>

    </li>
  )
};

const mapStateToProps = (state) => {
  return {}
}

const WrappedBook = connect(mapStateToProps)(Book)
export default WrappedBook
