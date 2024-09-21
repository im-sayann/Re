import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const passwordText = useRef(null)
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890"; // if number allowed
    if (charAllowed) str += "!@#$%&";

    // Looping through each str
    for (let i = 1; i <= length; i++) {
      //that returns index
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); // which character in the index
    }
    setPassword(pass); // passing the final random value in the password
  }, [numberAllowed, charAllowed, length, setPassword]);

  // Recalls the password if anything changed
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Copy the password Function
  const copyBtn = () => {
    passwordText.current?.select(); // Select the text
    passwordText.current?.setSelectionRange(0, password.length);

    if (password) {
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <>
      <main className="bg-zinc-900 min-h-screen w-full fixed">
        <div className="w-fit  mx-auto rounded-lg text-orange-500 bg-zinc-700 px-8 py-5 text-2xl mt-10">
          <div className="flex shadow-md overflow-hidden mb-4">
            <input
              ref={passwordText}
              type="text"
              value={password}
              className={`outline-none w-full py-1 px-3 rounded-l-lg selection:bg-blue-200 `}
              placeholder="password"
              readOnly
            />
            <button
              onClick={copyBtn}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg"
            >
              copy
            </button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={50}
                className="cursor-pointer"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="  w-[70px]"> Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <label> Numbers : </label>
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numberAllowed}
                className="cursor-pointer outline-none"
                onChange={(e) => setNumberAllowed((prev) => !prev)}
              />
            </div>

            <div className="flex items-center gap-x-1 ml-2">
              <label> Characters : </label>
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={charAllowed}
                className="cursor-pointer outline-none"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
