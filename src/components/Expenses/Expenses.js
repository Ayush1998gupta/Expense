import React, { useState } from 'react';
import './Style/Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
      <ExpensesList items={filteredExpress} />
    </Card>
  );
};

export default Expenses;
