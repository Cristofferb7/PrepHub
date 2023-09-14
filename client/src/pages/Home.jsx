import { useQuery } from "@apollo/client";
import getlocation from "../utils/map";

import Checklist from "../components/Checklist";
import CheckListForm from "../components/CheckListForm";

import { GET_ALL_CHECKLISTS } from "../utils/queries";

import React, { useState, useEffect } from "react";

const styles = {
  map: {
    minWidth: "100%",
    height: "400px",
    backgroundColor: "grey",
  },
};

const Home = () => {
  const { loading, data } = useQuery(GET_ALL_CHECKLISTS);
  const checkLists = data?.checkLists || [];

  // useEffect(() => {
  //   getlocation();

  // }, []);

  return (
    <main className="d-flex mainContainer">
      <div className="left">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item btn w-100 m-1">
            <a className="nav-link collapsed" href="/">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item btn w-100 m-1">
            <a
              className="nav-link collapsed"
              href="/me"
            >
              <i className="bi bi-grid"></i>
              <span>Profile</span>
            </a>
          </li>
          {/* <li className="nav-item btn w-100 m-1">
            <a className="nav-link collapsed" href="/">
              <i className="bi bi-grid"></i>
              <span>List</span>
            </a>
          </li> */}
          <li className="nav-item btn w-100 m-1">
            {/* div to show the map */}

            <a className="nav-link collapsed" onClick={getlocation}>
              <i className="bi bi-grid"></i>
              <span>Show Position</span>
            </a>
          </li>
        </ul>
        <div id="demo" style={styles.map} className="map mt-4">
          <p>Click the button to get your coordinates.</p>
        </div>
      </div>
      <div className="right">
        <div
          className="mb-3 p-3"
          style={{ backgroundColor: "#edede9", opacity: "0.8" }}
        >
          <CheckListForm />
        </div>
  
      </div>
    </main>
  );
};

export default Home;
