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

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite pigs...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>PIGSTY</h1>
        <h2>curated by emma</h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={numLoaded / images.length} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map(({ img }, index) => (
          <img
            className={currentImage === index ? "display" : "hide"}
            key={img}
            src={img}
            alt="a carousel of pig pictures"
            onClick={handleClick}
            onLoad={handleImageLoad}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
