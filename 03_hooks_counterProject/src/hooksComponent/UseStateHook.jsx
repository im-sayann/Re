import React, {useState} from 'react'

function UseStateHook() {

  const [input, setInput] = useState("")
  const [text, setText] = useState("")

  const onSubmitClick = () => {
    setText(input)
  }
  
  return (
    <div>
      <h1>{text}</h1>
      <input type="text" placeholder='text' onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={onSubmitClick}>Submit</button>
    </div>
  )
}

export default UseStateHook
