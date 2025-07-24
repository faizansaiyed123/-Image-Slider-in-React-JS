import React, { useEffect, useState } from 'react';
import data from '../component/data.json';


function Slider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="slider-container">
      <button className="nav-button" onClick={handlePrev}>
        « Prev
      </button>

      <figure>
        <img
          src={data[index].download_url}
          alt={`Image ${index + 1}`}
          className="slider-image"
        />
        <figcaption className="image-caption">
          Image {index + 1} of {data.length}
        </figcaption>
      </figure>

      <button className="nav-button" onClick={handleNext}>
        Next »
      </button>
    </section>
  );
}

export default Slider;
