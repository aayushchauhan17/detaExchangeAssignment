import React, { useState } from "react";
import "./InputDetails.css";

function InputDetails({ placeHolder, setData, data }) {
  const [showStatus, setShowStatus] = useState(false);
  return (
    <div className="input-details">
      <p>{placeHolder}</p>
      {placeHolder !== "Status" ? (
        <input
          type="text"
          onChange={(e) => {
            setData((prev) => {
              const key = placeHolder.toLowerCase();
              let valueObj = {};
              valueObj[key] = e.target.value;
              return { ...prev, ...valueObj };
            });
          }}
        />
      ) : (
        <>
          <div
            onClick={() => {
              setShowStatus((prev) => !prev);
            }}
            className="select-status"
          >
            {data?.status || ""}
          </div>
          {showStatus && (
            <div className="selectDropdown">
              <label
                onClick={() => {
                  setData((prev) => {
                    const key = placeHolder.toLowerCase();
                    let valueObj = {};
                    valueObj[key] = "Active";
                    return { ...prev, ...valueObj };
                  });
                  setShowStatus(false);
                }}
                style={{ borderBottom: "1px solid grey", paddingBottom: "2px" }}
              >
                Active
              </label>
              <label
                onClick={() => {
                  setData((prev) => {
                    const key = placeHolder.toLowerCase();
                    let valueObj = {};
                    valueObj[key] = "Close";
                    return { ...prev, ...valueObj };
                  });
                  setShowStatus(false);
                }}
              >
                Close
              </label>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default InputDetails;
