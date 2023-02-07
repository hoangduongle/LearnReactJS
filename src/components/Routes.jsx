import React from "react";

import { Route, Switch} from "react-router-dom";

import Customers from "../pages/Customers";
import Login from "../pages/Login/login.page";
import Staffs from "../pages/Staffs";


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/listStaffs" exact component={Staffs} />
      <Route path="/listCustomers" exact component={Customers} />
    </Switch>
  );
};

export default Routes;
