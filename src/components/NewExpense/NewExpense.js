import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const cancelHandler = () => {
    setShowForm(false);
  };

  const addNewExpenseHandler = () => {
    setShowForm(true);
  };
  if (showForm === false) {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseHandler}> Add New Expense</button>
      </div>
    );
  } else
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDatahandler}
          onCancel={cancelHandler}
        />
      </div>
    );
};

export default NewExpense;
