import React, { useEffect } from "react"
import { connect } from "react-redux"

import Book from "./Book"
import AddBook from "./AddBook"
import Loader from "../Common/Loader/Loader"
import Table from "./Table"

import { actionLoaded } from "../../Store/Library/Actions"

import "./Library.css"
import "../Common/Common.css"


async function fetchBooks(dispatch) {
  await new Promise(r => setTimeout(r, 2000));
  dispatch(actionLoaded)
}

function LibraryList(props) {

  return <Table books={props.books}/>

  return (
    <ol>
        { props.books.map((book, index) =>
                <Book name={book.name} key={book.id} author={book.author} 
                      book_id={book.id} index={index + 1}/>) 
        }
    </ol>
  )
}

function Library(props) {
  const loading = props.loading

  useEffect(() => {
    if (loading === true) {
      fetchBooks(props.dispatch)
    }
  })
  
  return(
    <div className={"common-page-container Library"}>
        <AddBook/>
        {loading ? <Loader/>: 
        props.books.length > 0 ? <LibraryList books={props.books}/> : 
        <p>You didn't add any books yet :(</p>}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    books: state.library.books,
    loading: state.library.loading
  }
}

export const WrappedLibrary = connect(mapStateToProps)(Library)
