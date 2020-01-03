import React from "react"
import Book from "./Book"
import AddBook from "./AddBook"
import { connect } from "react-redux"
import "./Library.css"


function LibraryList(props) {
  return (
    <ol className="LibList">
        { props.books.map((book, index) =>
                <Book name={book.name} key={book.id} author={book.author} 
                      book_id={book.id} index={index + 1}/>) 
        }
    </ol>
  )
}

function Library(props) {
  return(
    <div className="Library">
        <AddBook/>
        {props.books.length > 0 ? <LibraryList books={props.books}/> : <p>You didn't add any books yet :(</p>}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    books: state.library.books
  }
}

export const WrappedLibrary = connect(mapStateToProps)(Library)
