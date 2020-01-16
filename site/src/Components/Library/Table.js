import React from "react"
import { connect } from "react-redux"

import { actionRemoveBook } from "../../Store/Library/Actions"

import "./Table.css"

function Table(props) {
    const books = props.books
    const dispatch = props.dispatch

    return (
        <span className="table-container">
            <table className="table-fill">
            <thead>
                <tr>
                <th className="text-center number-column">№</th>
                <th className="text-center author-column">Author</th>
                <th className="text-center title-column">Title</th>
                <th className="text-center button-column"> </th>
                </tr>
            </thead>
            <tbody className="table-hover">
            { books.map((book, index) =>
                    <tr key={book.id}>
                        <td className="text-center">{index=index+1}</td>
                        <td className="text-left">{book.author}</td>
                        <td className="text-left">{book.name}</td>
                        <td className="text-center">
                            <button className="book-remove-button" 
                                    type="button" 
                                    onClick={()=>{dispatch(actionRemoveBook(book.id))}}>X
                            </button>
                        </td>
                    </tr>)
            }
            </tbody>
            </table>
        </span>
    )
}

const mapStateToProps = (state) => {
    return {}
  }
  
const WrappedTable = connect(mapStateToProps)(Table)

export default WrappedTable