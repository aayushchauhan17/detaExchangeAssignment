import React from "react";
import "./TableRow.css";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { db } from "../firebase/firebaseConfig";
import { deleteData } from "../firebase/DeleteData";

function TableRow({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="table-row">
        <input className="checkbox" type="checkbox" />
        <p className="name">{data?.name}</p>
        <p className="company">{data?.company}</p>
        <p className="status">{data?.status}</p>
        <p className="lastUpdate">{data?.lastUpdate}</p>
        <p className="notes">{data?.notes}</p>
        <button
          onClick={() => {
            deleteData(data);
            dispatch({
              type: "DELETE_MEMBER",
              payload: data,
            });
          }}
          className="delete-button"
        >
          <MdDelete size={24} />
        </button>
      </div>
    </>
  );
}

export default TableRow;
