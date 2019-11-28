import React from "react"
import { connect } from "react-redux"
import { actionToggleModal, actionAddBook } from "../../Store/Library/Actions"


function Modal(props) {
  const dispatch = props.dispatch
  return (
    <div className="addBookModal">
      <form>
        <h3>Name</h3>
        <input type="text"
                name="name"
                autoComplete="off" 
                placeholder="Name" 
                spellCheck="true"
                id="addbook_name_textbox">
        </input>
        <input type="text"
                name="author"
                autoComplete="on" 
                placeholder="Author" 
                spellCheck="false"
                id="addbook_author_textbox">
        </input>
        <button type="button" onClick={()=>{
          const name=document.getElementById("addbook_name_textbox").value;
          const author=document.getElementById("addbook_author_textbox").value;

          document.getElementById("addbook_author_textbox").value = "";
          document.getElementById("addbook_name_textbox").value="";
          dispatch(actionAddBook(name, author))
        }}>Submit</button>
        <button type="button" onClick={()=>dispatch(actionToggleModal)}>Cancel</button>
      </form>
    </div>
  )
}

function AddBook(props) {
  const dispatch = props.dispatch
  const modalVisible = props.modalVisible
  return(
    <div>
      {modalVisible? <Modal dispatch={dispatch} /> :
        <button onClick={()=> {dispatch(actionToggleModal)}}>
            Add book
        </button>
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    modalVisible: state.library.modalVisible
  }
}

const WrappedAddBook = connect(mapStateToProps)(AddBook)
export default WrappedAddBook
