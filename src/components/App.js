import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <label htmlFor="name">Enter your name:</label><br></br>
      <input
        id="name"
        value={name}
        type="text"
        onChange={handleChange}
      ></input>
      <p>{name}</p>
    </div>
  );
};

export default App;
