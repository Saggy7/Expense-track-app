import Expenses from "./Components/Expense/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import { useState } from "react";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Paper Bill",
    amount: 94.23,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "Light bill",
    amount: 799.23,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "New desk",
    amount: 450,
    date: new Date(2021, 4, 12),
  },
 
];

function App() {
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);

  const addExpenseDataHandler=(expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  }; 
  return(
    <div>
     
    <NewExpenses onAddExpense = {addExpenseDataHandler}/>
    <Expenses items ={expenses}/>  
  </div>
  )
  
}

export default App;
