import React from "react";
import "./TableRow.css";

function TableRowHeader() {
  return (
    <>
      <div className="table-row-header">
        <input className="checkbox" type="checkbox" />
        <p className="name">Name</p>
        <p className="company">Company</p>
        <p className="status">Status</p>
        <p className="lastUpdate">Last Update</p>
        <p className="notes">Notes</p>
      </div>
    </>
  );
}

export default TableRowHeader;
