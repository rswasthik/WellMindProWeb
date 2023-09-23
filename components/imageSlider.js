import { useEffect, useRef, useState } from "react";
import classes from "./imageSlider.module.css";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function ImageSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className={classes.slide}
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className={classes.slideshowDots}>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`{classes.slideshowDot}${
              index === idx ? " active" : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
