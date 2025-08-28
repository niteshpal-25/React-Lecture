import React from "react";

function FoodList({ foods, HandelClick }) {
  return (
    <div>
      {foods.map((item, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-blue-500 text-yellow-200 font-semibold rounded-2xl shadow-md hover:bg-blue-600 transition"
          onClick={() => HandelClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FoodList;
