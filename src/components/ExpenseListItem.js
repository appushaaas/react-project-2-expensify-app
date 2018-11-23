import React from  'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

  const ExpenseListitem = ({  id, description, amount, createdAt}) => (
  <div>
  <Link to={`/expense/${id}`}>
  <h3>{description}</h3>
  </Link>
  <p>
  {numeral(amount/100).format('$0,0.00')} 
  - 
  {moment(createdAt).format('MMMM Do YYYY')}
  </p>
 </div>

);

//export default ExpenseListitem;

// const ExpenseListitem = (props) => 
// {
//   console.log(props.id);
//   return(
//     <div>
//     <Link to={`/expense/${props.id}`}>
//     <h3>{props.description}</h3>
//     </Link>
//     <p>{props.amount} - {props.createdAt}</p>
//     <button onClick = { () => {
//         dispatch(removeExpense({id}));
//       }}>Remove</button>
//     </div>

//   );
  
// }
export default ExpenseListitem;