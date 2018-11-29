import React from  'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

  const ExpenseListitem = ({  id, description, amount, createdAt}) => (
  <Link className = "list-item" to={`/expense/${id}`}>
  <div>
     <h3 className = "list-item__title">{description}</h3>
     <span className = "list-item__subtitle">{moment(createdAt).format('MMMM Do YYYY')}</span>
  </div>
     <h3 className = "list-item__data">{numeral(amount/100).format('$0,0.00')}</h3>
  </Link>
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