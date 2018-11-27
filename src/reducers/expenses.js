


const expensesReducerDefaultstate = [];

export default(state = expensesReducerDefaultstate, action) =>
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
    case 'SET_EXPENSES':
    return action.expenses;

   // case 'START_SET_EXPENSES':

    default:
    return state;
}

};