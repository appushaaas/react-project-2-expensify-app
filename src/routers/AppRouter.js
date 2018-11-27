


  import React from 'react';
  import { BrowserRouter, Route, Switch } from 'react-router-dom';
  import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
  import AddExpensePage from '../components/AddExpensePage';
  import NotFound from '../components/NotFound';
  import Header from '../components/Header';
  import EditExpensePage from '../components/EditExpensePage';
  import HelpPage from '../components/HelpPage';
  import LoginPage from '../components/LoginPage';

const AppRouter = () => (
<BrowserRouter>
 <div>
   <Header />
   <Switch>
    <Route path = "/" component = {LoginPage} exact = {true}/>
    <Route path = "/dashboard" component = {ExpenseDashBoardPage}/>
    <Route path = "/create" component = {AddExpensePage}/>
    <Route path = "/expense/:id" component = {EditExpensePage}/>
    <Route path = "/help" component = {HelpPage}/>
    <Route component = {NotFound}/>
  </Switch>
 </div>
</BrowserRouter>

);

export default AppRouter;

//<Route path = "/" component = {Header}/>