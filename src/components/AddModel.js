import React, { useState } from "react";
import "./AddModel.css";
import InputDetails from "./InputDetails";
import { useDispatch } from "react-redux";
import { pushDataToDb } from "../firebase/pushData";

function AddModel({ setShowModel }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const date = new Date();
  return (
    <div className="container">
      <div className="model-container">
        <div className="model-header">
          <h2>Add Members</h2>
          <p
            className="x"
            onClick={() => {
              setShowModel(false);
            }}
          >
            x
          </p>
        </div>
        <div className="input-details">
          <InputDetails placeHolder="Name" setData={setData} />
          <InputDetails placeHolder="Company" setData={setData} />
          <InputDetails placeHolder="Status" setData={setData} data={data} />
          <InputDetails placeHolder="Notes" setData={setData} />
        </div>
        <div className="model-button">
          <button
            onClick={() => {
              setData({});
              setShowModel(false);
            }}
            className="cancel"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "ADD_MEMBER",
                payload: {
                  ...data,
                  lastUpdate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                },
              });
              pushDataToDb({
                ...data,
                lastUpdate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
              });
              setData({});
              setShowModel(false);
            }}
            className="save"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModel;
