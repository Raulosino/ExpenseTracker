import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.js";
import Card from "../UI/Card";
import { useState } from "react";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }

    const [formStatus,setFormStatus] = useState(false);

    const showForm = () =>{
        setFormStatus(true);
    }

    const cancelFormSignal = () =>{
        setFormStatus(false);
    }

    return(
        <Card className="new-expense">
            {!formStatus && <button onClick={showForm}>Add New Expense</button>}
            {formStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeFormSignal={cancelFormSignal}/>}
        </Card>
    );
}

export default NewExpense;