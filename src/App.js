import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
