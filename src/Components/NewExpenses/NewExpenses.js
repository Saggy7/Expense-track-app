import "./NewExpenses.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExepenseData) => {
    const expenseData = {
      ...enteredExepenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisediting(false);
  };
  const [isediting, setisediting] = useState(false);

  const starteditingHandler = () => {
    setisediting(true);
  };

  const stopEditingHandler = () => {
      setisediting(false);
    };

  return (
    <div className="new-expenses">
      {!isediting && (
        <button onClick={starteditingHandler}>Add New Expenses</button>
      )}

      {isediting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;
