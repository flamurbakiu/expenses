import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.onSaveExpenseDate(expenseData);
  }

  function clickHandler(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <form onSubmit={submitHandler}>
      {isOpen ? (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={title} />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>

          <div className="new-expense__actions">
            <button onClick={clickHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={clickHandler}>Add New Expense</button>
        </div>
      )}
    </form>
  );
}

export default ExpenseForm;
