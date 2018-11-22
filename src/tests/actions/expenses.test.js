

import { removeExpense, addExpense, editExpense } from '../../actions/expenses';

test('Should provide a test for removeExpense action', () => 
{
  const remove = removeExpense({ id: '123abc' });
 expect(remove).toEqual({
  type: 'REMOVE_EXPENSE',
  id: '123abc'
 });
});



test('Should provide a test for editExpense action', () => 
{
  const edit = editExpense( '123abc', { note: 'This is editExpense action.' });
 expect(edit).toEqual({
  type: 'EDIT_EXPENSE',
  id: '123abc',
  updates:{
  note: 'This is editExpense action.'
  }
 });
});


test('Should provide a test for addExpense action for provided values', () => 
{
  const expenseData = {
    description: 'Rent',
    note: 'It is addexpense action',
    amount: 19007,
    createdAt: 1000
}
  const action = addExpense( expenseData );
 expect(action).toEqual({
  type: 'ADD_EXPENSE',
  expenses: {
    ...expenseData,
    id: expect.any(String)
  }
 });
});

test('Should provide a test for addExpense action for default values', () => 
{
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
}
  const action = addExpense( expenseData );
 expect(action).toEqual({
  type: 'ADD_EXPENSE',
  expenses: {
    ...expenseData,
    id: expect.any(String)
  }
 });
});