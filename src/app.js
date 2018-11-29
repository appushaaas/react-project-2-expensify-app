
  import React from  'react';
  import ReactDOM from 'react-dom';
  import {Provider} from 'react-redux';
  import AppRouter, { history } from './routers/AppRouter';
  import configureStore from './store/configureStore';
  import { startSetExpenses } from './actions/expenses';
  import { login, logout } from './actions/auth';
  import getVisibleExpenses from './selectors/expenses';
  import { firebase } from './firebase/firebase';
  import './playground/promises';
  import 'normalize.css/normalize.css';
  import './styles/styles.scss';
  import LoadingPage from './components/LoadingPage';
 
  /*const obj = {
    name : 'Andrew',
    getName() {
    return this.name;
    }
    
};
const getName = obj.getName.bind({name : 'Anna'}); 
console.log(getName());*/


const store = configureStore();

// store.dispatch(addExpense({description: 'water bill', amount: 500}));
// store.dispatch(addExpense({description: 'current bill', createdAt: 10}));
// store.dispatch(addExpense({description: 'gas bill', amount: 1000}));
/*store.dispatch(setTextFilter('water'));
setTimeout( () => {
    store.dispatch(setTextFilter('bill'));
}, 3000)*/

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
//console.log(store.getState());


 const jsx = (
<Provider store = {store}>
   <AppRouter />
</Provider>
 );

 let hasProvided = false;
  const renderApp = () => {
      if(!hasProvided){
         ReactDOM.render(jsx, document.getElementById('app'));
         hasProvided = true;
      }
  };

 ReactDOM.render(<LoadingPage />, document.getElementById('app'));


 firebase.auth().onAuthStateChanged((user) => {
    if(user){
     store.dispatch(login(user.uid));
     store.dispatch(startSetExpenses()).then(() => {
     renderApp();
     if(history.location.pathname === '/'){
         history.push('/dashboard');
   }
     });
 }else{
    store.dispatch(logout());
         renderApp();  
        history.push('/');
      }
 });


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