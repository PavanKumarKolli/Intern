import React from "react";
import "./TableUi.css";
const TableUi = ({ arrayOfData }) => {
  console.log(arrayOfData);
  return (
    <div className="table_main">
      <div className="tab">
        <div className="tab-head">
          <span>Name</span>
          <span>Code Language</span>
          <span>Stdi</span>
          <span>Time</span>
          <span>Code</span>
        </div>
        {arrayOfData?.map((each, key) => (
          <div key={key} className="tab-body">
            <span>{each.name}</span>
            <span>{each.lang}</span>
            <span>{each.textare}</span>
            <span>{each.time?.toString().slice(0, 10)}</span>
            <span>{each.code?.slice(0, 100)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableUi;
