import React from "react";

export default function Item({ item, onDelete, onToggleView }) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded shadow 
        ${item.view ? "bg-green-100" : "bg-white"}`}
    >
      <span className={`text-lg ${item.view ? "font-bold" : ""}`}>
        {item.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggleView(item.id)}
          className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
        >
          View
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
