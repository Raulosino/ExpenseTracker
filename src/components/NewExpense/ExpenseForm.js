import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredPrice,setEnteredPrice] = useState('');
  const [enteredDate,setEnteredDate] = useState('');

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
  }

  const priceChangeHandler = (event) =>{
    setEnteredPrice(event.target.value);
  }

  const dateChangeHandler = (event) =>{
   setEnteredDate(event.target.value);
  }

  const closeForm = () =>{
    props.closeFormSignal(false);
  }

  const submitHandler =(event) =>{
    event.preventDefault();
    const expenseData = {
      title:enteredTitle,
      amount:enteredPrice,
      date:new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');
    closeForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title:</label>
          <input required type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Price:</label>
            <input required type="number"  min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Date:</label>
            <input required type="date"  min="2023-01-01" max="23-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
