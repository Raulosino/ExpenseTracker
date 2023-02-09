import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("0");

  const addSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (selectedYear == "0") {
      return props.expenses;
    } else {
      return expense.date.getFullYear().toString() === selectedYear;
    }
  });

 

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectedYear={addSelectedYear} />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
