import React from "react"
import { connect } from "react-redux"
import { actionToggleModal, actionAddBook } from "../../Store/Library/Actions"


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

async function commitBook(book, userId) {
  const book_id = getRandomInt(1, 200000)
  console.log(userId)
  console.log(`Commiting book: \n${book.name}\n${book.author}`)
  await fetch('http://127.0.0.1:8000/api/book/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: book_id, name: book.name,
          owner_id: userId, taken_by_id: userId })
      })
  var response = await fetch("http://127.0.0.1:8000/api/author/")
  const authors = await response.json()

  var author_id = -1
  for (var i = 0; i < authors.length; ++i) {
    if (authors[i].name === book.author || authors[i].name2 === book.author) {
      author_id = authors[i].id
      break
    }
  }

  if (author_id < 0) {
    author_id = getRandomInt(1, 100000)
    await fetch('http://127.0.0.1:8000/api/author/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: author_id, name: book.author,
          name2: book.author })
      })
  }
  await fetch('http://127.0.0.1:8000/api/book_author/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({book_id: book_id, author_id: author_id  })
  })

}

function Form(props) {
  const dispatch = props.dispatch
  const userId = props.userId

  console.log(`props: ${props.userId}`)

  return (
    <span className="addBookForm">
      <form>
        <div>
        <input type="text"
                name="name"
                autoComplete="off" 
                placeholder="Name" 
                spellCheck="true"
                id="addbook_name_textbox">
        </input>
        </div>
        <div>
        <input type="text"
                name="author"
                autoComplete="on" 
                placeholder="Author" 
                spellCheck="false"
                id="addbook_author_textbox">
        </input>
        </div>
        <button type="button" onClick={()=>{
          const name=document.getElementById("addbook_name_textbox").value;
          const author=document.getElementById("addbook_author_textbox").value;

          document.getElementById("addbook_author_textbox").value = "";
          document.getElementById("addbook_name_textbox").value="";

          commitBook({name: name, author: author}, userId)
          dispatch(actionAddBook(name, author))
        }}>Submit</button>
        <button type="button" onClick={()=>dispatch(actionToggleModal)}>Cancel</button>
      </form>
    </span>
  )
}

function AddBook(props) {
  const dispatch = props.dispatch
  const modalVisible = props.modalVisible
  return(
    <span>
      {modalVisible? <Form dispatch={dispatch} userId={props.userId}/> :
        <button onClick={()=> {dispatch(actionToggleModal)}}>
            Add book
        </button>
      }
    </span>
  )
};

const mapStateToProps = (state) => {
  return {
    modalVisible: state.library.modalVisible,
    userId: state.auth.id
  }
}

const WrappedAddBook = connect(mapStateToProps)(AddBook)
export default WrappedAddBook
