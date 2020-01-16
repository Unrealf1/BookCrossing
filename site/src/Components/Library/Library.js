import React, { useEffect } from "react"
import { connect } from "react-redux"

import AddBook from "./AddBook"
import Loader from "../Common/Loader/Loader"
import Table from "./Table"

import { actionLoaded, actionAddBook } from "../../Store/Library/Actions"

import "./Library.css"
import "../Common/Common.css"


async function fetchBooks(dispatch, userId) {

  var response = await fetch("http://127.0.0.1:8000/api/book/")
  var books = await response.json()
  books = books.filter((book) => book.owner_id === userId)

  response = await fetch("http://127.0.0.1:8000/api/author/")
  const authors = await response.json()

  response = await fetch("http://127.0.0.1:8000/api/book_author/")
  const books_authors = await response.json()

  for (const i = 0; i < books.length; ++i) {
    const found = books_authors.find((b_a) => books[i].id === b_a.book_id )
    var author = "Unknown"

    if (found !== undefined) {
      author = authors.find((au) => au.id === found.author_id).name
    }

    dispatch(actionAddBook(books[i].name, author))
  }
  
  dispatch(actionLoaded)
}

function Library(props) {
  const loading = props.loading

  useEffect(() => {
    if (loading === true) {
      fetchBooks(props.dispatch, props.userId)
    }
  })
  
  return(
    <div className={"common-page-container Library"}>
        <AddBook/>
        {loading ? <Loader/>: 
        props.books.length > 0 ? <Table books={props.books}/> : 
        <h3>You didn't add any books yet :(</h3>}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    books: state.library.books,
    loading: state.library.loading,
    userId: state.auth.id
  }
}

export const WrappedLibrary = connect(mapStateToProps)(Library)
