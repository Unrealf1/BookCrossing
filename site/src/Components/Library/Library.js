import React from "react"
import Book from "./Book"
import AddBook from "./AddBook"
import { connect } from "react-redux"


function LibraryList(props) {
  return (
    <ol>
        { props.books.map((book, index) =>
                <Book name={book.name} key={book.name + book.author} author={book.author} index={index + 1}/>) 
        }
    </ol>
  )
}

function Library(props) {
  return(
    <div>
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
