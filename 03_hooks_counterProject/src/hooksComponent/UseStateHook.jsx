import React, { useState } from "react";

function UseStateHook() {
  const [inputField, setInputFeild] = useState("sayan");

  const inputOnChange = (e) => {
    let inputValue = e.target.value;
    setInputFeild(inputValue);
  };

  const btnClick = (e) => {
    inputField
  };

  return (
    <>
      <input
        type="text"
        placeholder="type..."
        onChange={inputOnChange}
        value={inputField}
      />
      <button onClick={btnClick}>Submit</button>
      <div>g</div>
    </>
  );
}

export default UseStateHook;
