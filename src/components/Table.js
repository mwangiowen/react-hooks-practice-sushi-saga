import React from "react";

function Table({ budget, tableSushi }) {
  return (
    <div className="table">
      <p>You have: ${budget} remaining!</p>
      <div className="stack">
        {tableSushi.map((_, index) => (
          <div
            key={index}
            className="plate empty-plate"
            style={{
              zIndex: tableSushi.length - index,
              marginBottom: 2 * index + "px", // Adjust the margin dynamically
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
