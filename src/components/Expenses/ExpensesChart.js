import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const expenseDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  let totalAmount = 0;

  for (const expense of expenses) {
    expenseDataPoints[expense.date.getMonth()].value += expense.amount;
    console.log(expense);
    totalAmount += expense.amount;
  }

  console.log(expenseDataPoints);

  return <Chart dataPoints={expenseDataPoints} totalAmount={totalAmount} />;
};

export default ExpensesChart;
