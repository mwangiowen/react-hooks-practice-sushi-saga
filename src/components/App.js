import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [budget, setBudget] = useState(100);
  const [tableSushi, setTableSushi] = useState([]);

  const handleEatSushi = (price) => {
    if (budget - price >= 0) {
      setBudget((prevBudget) => prevBudget - price);
      setTableSushi((prevTableSushi) => [...prevTableSushi, price]);
    } else {
      console.log("Not enough budget to eat this sushi!");
      // You can display a message to the user or handle it in another way
    }
  };

  return (
    <div className="app">
      <h1>Sushi Saga</h1>
      <SushiContainer onEatSushi={handleEatSushi} />
      <Table budget={budget} tableSushi={tableSushi} />
    </div>
  );
}

export default App;
