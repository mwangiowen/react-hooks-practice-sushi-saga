import React, { useState, useEffect } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ onEatSushi }) {
  const [sushiData, setSushiData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/sushis");
        const data = await response.json();
        setSushiData(data);
      } catch (error) {
        console.error("Error fetching sushi data:", error);
      }
    };

    fetchData();
  }, []);

  const visibleSushi = sushiData.slice(startIndex, startIndex + 4);

  const handleMoreSushi = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % sushiData.length);
  };

  return (
    <div className="belt">
      {sushiData.length > 0 ? (
        visibleSushi.map((sushi) => (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            onEatSushi={onEatSushi}
            budget={100}
          />
        ))
      ) : (
        <p>Loading sushi...</p>
      )}
      <MoreButton onClick={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
