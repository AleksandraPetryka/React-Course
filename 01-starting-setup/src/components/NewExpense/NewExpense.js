import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {  //propsy to zawsze obiekty
  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
  };

  let [showForm, setShowForm] = useState(false); //showForm to wartość zmiennej która pokazuje form, setShowForm zmienia wartość zmiennej

  return (
    <div className="new-expense">
      {!showForm && <button onClick={() => setShowForm(true)}>Add New Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={() => setShowForm(false)}/>}
    </div>
  )
}

export default NewExpense;