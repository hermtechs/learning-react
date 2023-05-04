import React from 'react'

function WordCount(str) { 
  return str.split(" ").length;
}

const WordBody = (props, maxChar=10) => {
  return (
    <>
    <h5>
    {WordCount(props.children)>maxChar?console.log(WordCount(props.children)):props.children.substring(0, 100)}
    </h5>
    <button onClick={props.expandText}>Expand</button>
    </>
  )
}

export default WordBody
