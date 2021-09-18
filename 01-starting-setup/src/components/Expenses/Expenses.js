import React, {/*useEffect*/ useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

function Expenses({expenses}) {

  const [filteredYear, setFilteredYear] = useState('2020'); //setFilteredYear zmienia wartość filteredYear

  const filterChangeHandler = selectedYear => { //opakowanie dla funkcji setFilteredYear żeby dziecko nie miało do niej dostępu
    setFilteredYear(selectedYear); //czyli ta funkcja zapisuje, bez zapisania byłaby inna wartość
  };

  const filteredExpenses = expenses.filter(expense => {
    return (
      expense.date.getFullYear().toString() === filteredYear
    )
  });

  console.log(`log: filteredExpenses = `, filteredExpenses);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFilteredYear('2019');
  //   }, 1000);
  // }, [setFilteredYear]);

  //In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component.

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;