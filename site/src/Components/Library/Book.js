import React from "react"


export default function Book(props) {
  const name = props.name
  const author = props.author

  return(
    <li>
        Name: {name}  Author: {author}
    </li>
  )
};
