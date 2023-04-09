import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 9 2022</div>
      <div className="expense-item__description">
        <h2>Books</h2>
        <div className="expense-item__price">₹500</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
