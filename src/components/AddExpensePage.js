import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect }  from 'react-redux';
import { addExpense } from '../actions/expenses';
//import { prependOnceListener } from 'cluster';

const AddExpensePage = (props) => (
    <div>
       <h1>Add Expense</h1>
       <ExpenseForm 
       onSubmit = {(expense) => {
         //console.log(expense);
         props.dispatch(addExpense(expense));
         props.history.push('/');
      }}
      />
   </div>
   
   );

   export default connect()(AddExpensePage);