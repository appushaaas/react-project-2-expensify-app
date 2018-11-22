import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import { userInfo } from 'os';



const expensesReducerDefaultstate = [];

const expensesReducer = (state = expensesReducerDefaultstate, action) =>
{
switch(action.type)
{
    case 'ADD_EXPENSE':
    return [
            action.expenses, ...state
    ];
    case 'REMOVE_EXPENSE':
    return state.filter(({ id }) => id !== action.id
    );
    case 'EDIT_EXPENSE':
     return state.map((expenses) => {
     if(expenses.id === action.id)
     {
         return {...expenses,
            ...action.updates};
     }else{
         return expenses;
     };
    });
    default:
    return state;
}

};

const filtersReducerDefaultstate = { 
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultstate, action) =>
{
switch(action.type)
{
    case 'SET_TEXT_FILTER':
    return {...state,
    text: action.text};
    case 'SORT_BY_AMOUNT':
    return{
        ...state,
        sortBy: 'amount'
    };
    case 'SORT_BY_DATE':
    return{
        ...state,
        sortBy: 'date'
    };
    case 'SET_START_DATE':
    return {
        ...state,
        startDate: action.startDate
    };

    case 'SET_END_DATE':
    return {
        ...state,
        endDate: action.endDate
    };
    default:
    return state;
}

};

const addExpense = (
    {description = ' ',
    note = ' ',
    amount = 0,
    createdAt = 0} = {}
    ) => ({
 type: 'ADD_EXPENSE',
 expenses: {
     id: uuid(),
     description,
     note,
     amount,
     createdAt
 }
});

const removeExpense = (
    {id} = {}) => ({
   type: 'REMOVE_EXPENSE',
   id
});

const editExpense = (id, updates) => (
{
   type: 'EDIT_EXPENSE',
   id,
   updates
});
const setTextFilter = (text = '') => ({
 type: 'SET_TEXT_FILTER',
 text
});
const sortByAmount = () => ({
 type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
   });

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });

 const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
     return expenses.filter( (expense) => {
           const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
           const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
           const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

           return startDateMatch && endDateMatch && textMatch;
     }).sort( (a, b) => {
         if(sortBy === 'date'){
           return a.createdAt < b.createdAt ? 1 : -1;
         }else if(sortBy === 'amount'){
             return a.amount < b.amount ? 1 : -1;
         }
     });
 };




const store = createStore(
combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})

);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, note: 'rentis', createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'home', amount: 300, note: 'homeis', createdAt: -1000}));

/*store.dispatch(removeExpense({id: expenseOne.expenses.id}));
store.dispatch(editExpense(expenseTwo.expenses.id, { amount : 500 }));*/
//store.dispatch(setTextFilter('rent'));
/*store.dispatch(setTextFilter());*/
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
/*store.dispatch(setStartDate(0));
store.dispatch(setStartDate());
store.dispatch(setEndDate(125));*/

console.log(expenseOne);
const demoState = {

    expenses: [{
        id: 'id110',
        description: 'January post',
        note: 'This was in january',
        amount: 43000,
        createdAt: 0
    }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', //(amount||date)
        startDate: undefined ,
        endDate: undefined
    }
};

/*const person={
    name: 'Andrew',
    age: 24
};

console.log({
    age: 27,
    ...person,
    location: 'Philadelphia'
});*/