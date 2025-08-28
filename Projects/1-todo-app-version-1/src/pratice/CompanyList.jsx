import React from "react";
import CompanyItem from "./CompanyItem";

function CompanyList({ companyDetails }) {
  return (
    <div>
      {companyDetails.map((item, index) => (
        <ul style={{ listStyle: "none" }}>
          <CompanyItem
            key={index}
            name={item.name}
            location={item.location}
            industry={item.industry}
            employees={item.employees}
            active={item.active}
          ></CompanyItem>
        </ul>
      ))}
    </div>
  );
}

export default CompanyList;
