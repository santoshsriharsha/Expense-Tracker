import { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITAL_EXPENSES = [
  {
    id: "e1",
    title: "Books",
    amount: 500,
    date: new Date(2022, 3, 10),
  },
  {
    id: "e2",
    title: "Watch",
    amount: 10000,
    date: new Date(2022, 4, 15),
  },
];
function App() {
  const [expenses, setExpenses] = useState(INITAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
