import React from "react";

function MoreButton({ onClick }) {
  return (
    <button className="more-button" onClick={onClick}>
      More Sushi! 🍣
    </button>
  );
}

export default MoreButton;
