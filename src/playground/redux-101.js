import { createStore } from 'redux';


const reducer = ( state = {count : 0 }, action) => {
 
switch(action.type)
 {
 case 'INCREMENT':
   //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
   return {count : state.count + action.incrementBy};
   case 'DECREMENT' :
   const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
   return {count : state.count - decrementBy};
   case 'SET' :
   return{
     count: action.count
   };
   case 'RESET' :
   return {count : 0};
   default:
   return state;
}};
const store = createStore(reducer);
 

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());

});

const incrementCount = ({incrementBy = 1} = {}) => ({
  type : 'INCREMENT',
  incrementBy
  // incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});
/*store.dispatch({
  type : 'INCREMENT',
  incrementBy : 5
});*/

const decrementCount = ({decrementBy = 1} = {}) => ({
  type : 'DECREMENT',
  decrementBy
});


const resetCount = () => ({
  type : 'RESET'
});


const setCount = ({ count }) => ({
  type : 'SET',
  count
});
store.dispatch(incrementCount({ incrementBy : 5 }));

store.dispatch(incrementCount()); 
//unsubscribe();

/*store.dispatch({
  type : 'INCREMENT'
});*/
store.dispatch(resetCount());




store.dispatch(decrementCount({ decrementBy : 10 }));
 
store.dispatch(decrementCount());

/*store.dispatch(
  {
    type : 'DECREMENT'
  }
);

store.dispatch(
  {
    type : 'DECREMENT',
    decrementBy : 10
  }
);*/
store.dispatch(setCount({ count :101 }));
/*store.dispatch({
   type: 'SET',
   count: 101
});*/