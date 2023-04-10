import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div>
      <h1 id="h1">Welcome</h1>
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
