import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Customers from '../pages/Customers'
import Staffs from "../pages/Staffs";

const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={Staffs} />
        <Route path="/listStaffs" exact component={Staffs} />
        <Route path="/listCustomers" component={Customers} />
      </Switch>
    );
}

export default Routes
