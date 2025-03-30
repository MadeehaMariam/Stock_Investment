import React, { useState } from "react";
import "../style/Budget.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Budget = () => {
  const [budget, setBudget] = useState(7890); // Initial budget
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Expense 1", amount: 789, date: "21/03/2025 at 04:14 PM" },
  ]);

  // Calculate total spent dynamically
  const Spent = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Calculate remaining budget dynamically
  const remainingBudget = budget - Spent;

  const progress = (Spent / budget) * 100;

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleEdit = (id) => {
    const expenseToEdit = expenses.find((e) => e.id === id);
    const newDescription = prompt("Edit Description:", expenseToEdit?.description);
    const newAmount = prompt("Edit Amount:", expenseToEdit?.amount);

    if (newDescription && newAmount) {
      const updatedExpenses = expenses.map((expense) =>
        expense.id === id
          ? { ...expense, description: newDescription, amount: Number(newAmount) }
          : expense
      );
      setExpenses(updatedExpenses);
    }
  };

  const handleAddBudget = () => {
    const newBudget = prompt("Enter new budget amount:");
    if (newBudget) {
      setBudget(Number(newBudget));
    }
  };

  const handleAddExpense = () => {
    const description = prompt("Enter expense description:");
    const amount = prompt("Enter expense amount:");
    if (description && amount) {
      const newExpense = {
        id: expenses.length + 1,
        description,
        amount: Number(amount),
        date: new Date().toLocaleString(),
      };
      setExpenses([...expenses, newExpense]);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Budget Management</h2>

      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Budgets</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">Budget: $ {budget}</p>
            <p className="text-lg font-semibold text-green-600">
              Remaining: $ {remainingBudget}
            </p>
            <p className="text-lg font-semibold text-red-600">
              Spent: $ {Spent}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleAddBudget}
            >
              + Add Budget
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={handleAddExpense}
            >
              + Add Expense
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Expense History</h3>
        <table className="w-full mt-2 border-collapse border border-gray-500">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border border-gray-500">#</th>
              <th className="p-4 border border-gray-500">Description</th>
              <th className="p-4 border border-gray-500">Amount</th>
              <th className="p-4 border border-gray-500">Date & Time</th>
              <th className="p-4 border border-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense.id} className="text-center">
                <td className="p-4 border border-gray-500">{index + 1}</td>
                <td className="p-4 border border-gray-500">{expense.description}</td>
                <td className="p-4 border border-gray-500">${expense.amount}</td>
                <td className="p-4 border border-gray-500">{expense.date}</td>
                <td className="p-4 border border-gray-500 flex justify-center space-x-4">
                  <button
                    className="text-yellow-500 px-2 py-1 rounded"
                    onClick={() => handleEdit(expense.id)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="text-red-500 px-2 py-1 rounded"
                    onClick={() => handleDelete(expense.id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Budget;
