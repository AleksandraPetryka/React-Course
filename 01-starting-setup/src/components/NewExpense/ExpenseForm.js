import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  //React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState)

  const [enteredTitle, setEnteredTitle] = useState('');
  console.log(`log: props = `, props);
  console.log(`log: enteredTitle = `, enteredTitle);
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {  //event to wydarzenie wpisywania
    console.log(`log: COŚ WPISALIŚMY LOOOOOOO`);

    setEnteredTitle(event.target.value);  //event.target to miejsce gdzie wykonał się event a value to wartość tego miejsca
    // zatem setEnteredTitle przyjmuje wartość którą wpisałam
    //useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(`log: event.target.value.substring(0, 4) = `, event.target.value.substring(0, 4));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}   //onChange przyjmuje funkcję, która się wywoła gdy coś wpiszesz
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}  //onChange przyjmuje funkcję, która się wywoła gdy coś wpiszesz
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}  //onChange przyjmuje funkcję, która się wywoła gdy coś wpiszesz
           />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;