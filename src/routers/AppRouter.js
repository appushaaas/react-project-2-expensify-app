


  import React from 'react';
  import { BrowserRouter, Route, Switch } from 'react-router-dom';
  import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
  import AddExpensePage from '../components/AddExpensePage';
  import NotFound from '../components/NotFound';
  import Header from '../components/Header';
  import EditExpensePage from '../components/EditExpensePage';
  import HelpPage from '../components/HelpPage';


const AppRouter = () => (
<BrowserRouter>
 <div>
   <Header />
   <Switch>
    <Route path = "/" component = {ExpenseDashBoardPage} exact = {true}/>
    <Route path = "/create" component = {AddExpensePage}/>
    <Route path = "/expense/:id" component = {EditExpensePage}/>
    <Route path = "/help" component = {HelpPage}/>
    <Route component = {NotFound}/>
    <Route path = "/" component = {Header}/>
  </Switch>
 </div>
</BrowserRouter>

);

export default AppRouter;

