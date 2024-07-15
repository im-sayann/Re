import React from 'react'
import { useState, useEffect, useRef } from 'react';

function Password() {

    const [password, setPassword] = useState('')
    const [length, setLength] = useState(6)
    const [numAllowed, setNumAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)

    let passwordRef = useRef(null)

    const copyPassword = () => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select()
        
    }

    useEffect(() => {
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (numAllowed) str += '01234556789'
        if (charAllowed) str += '!@#$%^&'

        for (let index = 1; index < length; index++) {
            
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
            
        }
        setPassword(pass)


    }, [length, numAllowed, charAllowed, setPassword])
    


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md bg-gray-600 rounded-lg text-3xl text-orange-500 px-4 py-3 my-8">
        <h1 className="text-center text-xl my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none text-xl w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPassword}
            className="outline-none text-xl bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            ></input>
            <label>Length {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed((prev) => !prev)}
            ></input>
            <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Password
