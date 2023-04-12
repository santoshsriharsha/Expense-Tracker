import "./ExpenseDate.css";

function ExpenseDate(props) {
  const expenseDate = props.date;

  const day = expenseDate.toLocaleString("en-IN", { day: "2-digit" });
  const month = expenseDate.toLocaleString("en-IN", { month: "long" });
  const year = expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
