import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="1" step="1" />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="summit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
