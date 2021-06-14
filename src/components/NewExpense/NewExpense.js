import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseDate) {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random(),
    };
    //console.log(expenseDate);
    props.onAddExpense(expenseDate);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
