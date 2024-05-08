import React, { useState } from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice, randInt } from "./random";

const defaultColors = [
  "Blue", "Black", "Green",  "Brown", "Teal", "Violet", "Yellow"];



function BoxesContainer({ allColors = defaultColors, numBoxes = 16 }) {
 
  const [boxes, setBoxes] = useState(getInitialRandomColors);

 
  function getInitialRandomColors() {
    return Array.from(
        { length: numBoxes },
        () => choice(allColors));
  }

 
  function handleClick(evt) {
    setBoxes(boxes => {
      let idx = randInt(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      return boxCopy;
    });
  }

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
      <div>
        <section className="BoxesContainer">{boxComponents}</section>
        <button onClick={handleClick}>Change a Box</button>
        
      </div>
  );
}


export default BoxesContainer;