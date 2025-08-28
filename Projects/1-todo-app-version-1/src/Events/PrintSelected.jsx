import React, { useState } from "react";
import FoodList from "./FoodList";

function PrintSelected() {
  const [value, setValue] = useState("NA");
  const foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sandwich",
    "Salad",
    "Sushi",
    "Tacos",
    "Biryani",
    "Dosa",
    "Ice Cream",
  ];
  const HandelClick = (item) => {
    setValue(item);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Heading with red font color */}
      <h2 className="text-3xl font-bold mb-6 text-red-600">
        Select Your Favorite Food
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <FoodList foods={foods} HandelClick={HandelClick}></FoodList>
        <p>
          <b>Selected value is: {value}</b>
        </p>
      </div>
    </div>
  );
}

export default PrintSelected;
