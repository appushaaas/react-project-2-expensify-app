
  import React from  'react';
  import ReactDOM from 'react-dom';
  import {Provider} from 'react-redux';
  import AppRouter from './routers/AppRouter';
  import configureStore from './store/configureStore';
  import { addExpense } from './actions/expenses';
  import { setTextFilter } from './actions/filters';
  import getVisibleExpenses from './selectors/expenses';
  import 'normalize.css/normalize.css';
  import './styles/styles.scss';
  /*const obj = {
    name : 'Andrew',
    getName() {
    return this.name;
    }
    
};
const getName = obj.getName.bind({name : 'Anna'}); 
console.log(getName());*/


const store = configureStore();
store.dispatch(addExpense({description: 'water bill', amount: 500}));
store.dispatch(addExpense({description: 'current bill', createdAt: 10}));
store.dispatch(addExpense({description: 'gas bill', amount: 1000}));
/*store.dispatch(setTextFilter('water'));
setTimeout( () => {
    store.dispatch(setTextFilter('bill'));
}, 3000)*/

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
//console.log(store.getState());


 const jsx = (
<Provider store = {store}>
   <AppRouter />
</Provider>
 );
ReactDOM.render(jsx, document.getElementById('app'));


/*class OldSyntax  {
  constructor(){
      this.name = 'Mike';
      this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting(){
      console.log(`Hi.My name is ${this.name}.`);
  }
};

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting);

class NewSyntax {
    name = 'Jen';
    getNewGreeting = () => {
        console.log(`Hi.My name is ${this.name}.`);
    }
};

const newSyntax = new NewSyntax();
console.log(newSyntax);
console.log(newSyntax.getNewGreeting);

const LayOut = (props) => {
 return (
  <div>
      <p>Header</p>
        {props.children}
     <p>Footer</p>
  </div>
 )
};

ReactDOM.render(<LayOut><div>
    <p>Header</p>
    <p>This is inline.</p>
   <p>Footer</p>
</div></LayOut>, document.getElementById('app'));*/