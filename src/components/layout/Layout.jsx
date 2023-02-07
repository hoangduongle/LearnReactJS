import React, { Fragment } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Router from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            {props.location.pathname === "/" ||
            props.location.pathname === "/login" ? (
              <Router />
            ) : (
              <div className={"layout"}>
                <Sidebar {...props} />
                <div className="layout__content">
                  <TopNav />
                  <div className="layout__content-main">
                    <Router />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
