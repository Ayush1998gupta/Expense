import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState('2020');

  const onYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpress = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredyear}
        onYearChange={onYearChangeHandler}
      />

      {filteredExpress.length === 0 ? (
        <p>No Exoense Found.</p>
      ) : (
        filteredExpress.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      )}
    </Card>
  );
};

export default Expenses;
