import "./styles.css";
import React, { useState } from "react";
import morning from "./assets/image1.jpeg";
import pair from "./assets/image2.jpeg";
import hair from "./assets/image3.jpeg";
import teeth from "./assets/image4.jpeg";
import squad from "./assets/image5.jpeg";
import king from "./assets/image6.png";

const images = [morning, pair, hair, teeth, squad, king];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      if (currentImage < length) {
        return currentImage + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>pigsty</h1>
        <h2>
          a photography collection <br /> curated by emma brown
        </h2>
      </div>
      <div className="image-container"></div>
      <img
        alt="a carousel of pig pictures"
        src={images[currentImage]}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
