import React from "react";
import "./App.css";
import CompanyList from "./CompanyList";

const companyList = [
  {
    id: 1,
    name: "Google",
    active: false,
    location: "USA",
    industry: "Technology",
    employees: 190000,
  },
  {
    id: 2,
    name: "Microsoft",
    active: true,
    location: "USA",
    industry: "Software",
    employees: 220000,
  },
  {
    id: 3,
    name: "Amazon",
    active: true,
    location: "USA",
    industry: "E-commerce & Cloud",
    employees: 1600000,
  },
  {
    id: 4,
    name: "Facebook (Meta)",
    active: false,
    location: "USA",
    industry: "Social Media",
    employees: 86000,
  },
  {
    id: 5,
    name: "Apple",
    active: false,
    location: "USA",
    industry: "Consumer Electronics",
    employees: 165000,
  },
];
function DisplayCompany() {
  return (
    <div>
      <center className="todo-container">
        <h2>Company List</h2>
        <CompanyList companyDetails={companyList}></CompanyList>
      </center>
    </div>
  );
}

export default DisplayCompany;
