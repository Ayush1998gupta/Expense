import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  console.log(props);
//   const expenseDate = new Date(2020, 7, 14);
//   const expensetitle = 'Car Insurence';
//   const expenseAmount = 1500;

  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
