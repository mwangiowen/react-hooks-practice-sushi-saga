import React, { useState } from "react";

function Sushi({ sushi, onEatSushi, budget }) {
  const [isEaten, setIsEaten] = useState(false);

  const handleEatSushi = () => {
    if (!isEaten && budget - sushi.price >= 0) {
      setIsEaten(true);
      onEatSushi(sushi.price);
    } else {
      console.log("Not enough budget to eat this sushi!");
      // You can display a message to the user or handle it in another way
    }
  };

  return (
    <div
      className={`sushi ${isEaten ? "eaten" : ""}`}
      onClick={handleEatSushi}
      role="button"
      tabIndex="0"
    >
      {isEaten ? (
        <div className="plate empty-plate" />
      ) : (
        <>
          <h3>{sushi.name}</h3>
          <img src={sushi.img_url} alt={`${sushi.name} sushi`} />
          <p>${sushi.price}</p>
        </>
      )}
    </div>
  );
}

export default Sushi;
