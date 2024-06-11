import { useState } from "react";

/* eslint-disable react/prop-types */
function FormComponent({ setUsername }) {
  const [temp, setTemp] = useState("");

  function handleInputChange(event) {
    setTemp(event.target.value);
  }

  function submitUsername(event) {
    event.preventDefault();
    setUsername(temp);
  }

  return (
    <form onSubmit={submitUsername}>
      <input type="text" onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default FormComponent;
