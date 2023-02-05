import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.js";
import Card from "../UI/Card";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }

    return(
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </Card>
    );
}

export default NewExpense;