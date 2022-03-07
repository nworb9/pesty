import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    alert("hey");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Pesty</h1>
        <h2>
          a photography project <br /> by Ella Fieldling
        </h2>
        <button onClick={handleClick}>click here</button>
        <input
          type="text"
          name="example"
          autoComplete="off"
          onChange={handleChange}
        ></input>
      </div>
      <div className="image-container"></div>
      <img alt="" src={images[0]} />
    </div>
  );
};

export default App;
