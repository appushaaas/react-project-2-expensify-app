


  import React from 'react';
  import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
  import createHistory from 'history/createBrowserHistory';
  import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
  import AddExpensePage from '../components/AddExpensePage';
  import NotFound from '../components/NotFound';
  import EditExpensePage from '../components/EditExpensePage';
  import LoginPage from '../components/LoginPage';
  import PrivateRoute from './PrivateRoute';
  import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
 <div>
   <Switch>
    <PublicRoute path = "/" component = {LoginPage} exact = {true}/>
    <PrivateRoute path = "/dashboard" component = {ExpenseDashBoardPage}/>
    <PrivateRoute path = "/create" component = {AddExpensePage}/>
    <PrivateRoute path = "/expense/:id" component = {EditExpensePage}/>
    <Route component = {NotFound}/>
   </Switch>
 </div>
</Router>

);

export default AppRouter;

//<Route path = "/" component = {Header}/>