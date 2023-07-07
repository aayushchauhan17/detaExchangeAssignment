import React, { useState } from "react";
import "./FilterModel.css";
import { useDispatch, useSelector } from "react-redux";

function FilterModel({
  statusModel = false,
  data,
  setShowCompanyModel = () => {},
  setShowStatusModel = () => {},
}) {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state?.memberReducer);
  const [selectedCompany, setSelectedCompany] = useState({
    ...myState.selectedFilter,
  });

  function onHandleStatus(response) {
    dispatch({ type: "SORT_MEMBERS", payload: response });
    setShowStatusModel(false);
  }

  return (
    <div
      className="filter-container"
      style={{ left: statusModel ? "260px" : "" }}
    >
      {!statusModel ? (
        <ul>
          <li>
            <input
              type="checkbox"
              checked={Object.keys(selectedCompany).length === data.length}
              onChange={() => {
                let selectAllObj = {};
                if (Object.keys(selectedCompany).length === data.length) {
                  setSelectedCompany({});
                } else {
                  data.map((dataArr) => {
                    selectAllObj[dataArr] = dataArr[0];
                    return null;
                  });
                  setSelectedCompany(selectAllObj);
                }
              }}
            />
            <label htmlFor="selectAll">Select all</label>
          </li>
          {data?.map((arr, idx) => {
            return (
              <li key={idx}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (selectedCompany[arr[0]]) {
                      setSelectedCompany((prev) => {
                        let obj = { ...prev };
                        delete obj[arr[0]];
                        return obj;
                      });
                    } else {
                      setSelectedCompany((prev) => {
                        let obj = {};
                        obj[arr[0]] = arr[0];
                        return { ...prev, ...obj };
                      });
                    }
                  }}
                  checked={selectedCompany[arr[0]] ? true : false}
                />
                <label>{arr}</label>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul style={{ marginLeft: "10px", fontWeight: "600" }}>
          <li onClick={() => onHandleStatus("All")}>All</li>
          <li onClick={() => onHandleStatus("Active")}>Active</li>
          <li onClick={() => onHandleStatus("Close")}>Close</li>
        </ul>
      )}
      {!statusModel && (
        <button
          onClick={() => {
            dispatch({
              type: "APPLY_FILTER",
              payload: selectedCompany,
            });
            setShowCompanyModel(false);
          }}
        >
          Apply
        </button>
      )}
    </div>
  );
}

export default FilterModel;
