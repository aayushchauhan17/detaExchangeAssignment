import React, { useEffect, useState } from "react";
import "./Main.css";
import TableRow from "./TableRow";
import TableRowHeader from "./TableRowHeader";
import AddModel from "./AddModel";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FilterModel from "./FilterModel";
import { getData } from "../firebase/getData";

function Main() {
  const [showModel, setShowModel] = useState(false);
  const [getDataDb, setGetDataDb] = useState({});
  const [showCompanyModel, setShowCompanyModel] = useState(false);
  const [showStatusModel, setShowStatusModel] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getData(setGetDataDb);
  }, []);

  useEffect(() => {
    if (getDataDb?.length) dispatch({ type: "GET_DATA", payload: getDataDb });
  }, [getDataDb]);

  const myState = useSelector((state) => state?.memberReducer);

  const company = myState?.members?.map((arr) => {
    let comp = [];
    comp = [...comp, arr.company];
    return comp;
  });
  return (
    <>
      <div className="main-container">
        <div className="table-header">
          <h1>Team Members</h1>
          <button
            onClick={() => {
              setShowModel(true);
            }}
          >
            Add Members +
          </button>
        </div>
        <div className="table-container">
          <div className="table-filter">
            <button
              onClick={() => {
                setShowStatusModel(false);
                setShowCompanyModel((prev) => !prev);
              }}
            >
              Company{" "}
              {showCompanyModel ? (
                <MdKeyboardArrowUp size={20} />
              ) : (
                <MdKeyboardArrowDown size={20} />
              )}
            </button>
            <button
              onClick={() => {
                setShowCompanyModel(false);
                setShowStatusModel((prev) => !prev);
              }}
            >
              Status{" "}
              {showStatusModel ? (
                <MdKeyboardArrowUp size={20} />
              ) : (
                <MdKeyboardArrowDown size={20} />
              )}
            </button>
          </div>
          {showCompanyModel && (
            <FilterModel
              data={company}
              setShowCompanyModel={setShowCompanyModel}
            />
          )}
          {showStatusModel && (
            <FilterModel
              statusModel={true}
              setShowStatusModel={setShowStatusModel}
            />
          )}
          <div className="table-data">
            <TableRowHeader />
            {myState?.showMembers?.map((arr, idx) => {
              return (
                <div key={idx}>
                  <TableRow data={arr} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showModel && <AddModel setShowModel={setShowModel} />}
    </>
  );
}

export default Main;
