import React, {useState} from 'react'

function UseStateHook() {

  const [input, setInput] = useState("")
  const [text, setText] = useState("")

  const onSubmitClick = (e) => {
    e.preventDefault()
    setText(input)
  }
  
  return (
    <div>
      <h1>{text}</h1>
      <form onSubmit={onSubmitClick}>
        <input type="text" placeholder='text' onChange={(e) => setInput(e.target.value)} value={input}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UseStateHook
