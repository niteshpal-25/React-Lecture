import React from "react";

function CompanyItem({ key, name, location, industry, employees, active }) {
  return (
    <div>
      <li className="company-item" key={key}>
        <strong>{name}</strong>
        <span> | {industry}</span>
        <span> | {location}</span>
        <span> | Employees: {employees.toLocaleString()}</span>
        <span style={{ color: active ? "green" : "red", marginLeft: "10px" }}>
          {active ? "Active" : "Inactive"}
        </span>
      </li>
    </div>
  );
}

export default CompanyItem;
