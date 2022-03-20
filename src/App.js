import "./styles.css";
import React, { useState } from "react";
import morning from "./assets/image1.jpeg";
import pair from "./assets/image2.jpeg";
import hair from "./assets/image3.jpeg";
import teeth from "./assets/image4.jpeg";
import gang from "./assets/image5.jpeg";
import king from "./assets/image6.png";

const images = [
  { name: "morning", img: morning },
  { name: "pair", img: pair },
  { name: "hair", img: hair },
  { name: "teeth", img: teeth },
  { name: "gang", img: gang },
  { name: "king", img: king },
];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>PIGSTY</h1>
        <h2>curated by emma</h2>
      </div>
      <div className="image-container">
        <h3>
          {currentImage + 1} / {images.length}
        </h3>
        <img
          className={images[currentImage].name}
          alt="a carousel of pig pictures"
          src={images[currentImage].img}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default App;
