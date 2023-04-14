import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
function Expenses(props) {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("2022");

  const saveYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={saveYearHandler}
          selectedYear={filteredYear}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
