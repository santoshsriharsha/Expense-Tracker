import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      title: "Books",
      amount: 500,
      date: new Date(2022, 3, 10),
    },
    {
      title: "Watch",
      amount: 10000,
      date: new Date(2022, 4, 15),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
