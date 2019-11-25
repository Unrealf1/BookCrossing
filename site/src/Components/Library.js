import React from "react"
import Book from "./Library/Book"
import AddBook from "./Library/AddBook"
import HomeButton from "./Common/HomeButton"


export default function Library() {
  return(
    <div>
        Here you can see your beautiful library!
        <AddBook/>
        <HomeButton/>
        <ol>
            <li><Book name="The Hero with a Thousand Faces" /></li>
            <li><Book name="Обитаемый остров"/></li>
            <li><Book name="Черная магия для чайников. Том 7"/></li>
            <li><Book/></li>
        </ol>
    </div>
  )
};
