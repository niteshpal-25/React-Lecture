import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        borderRadius: "16px",
        padding: "20px",
        margin: "15px 0",
        background: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
