import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.99,
    date: new Date('2021-12-22'),
  },
  {
    id: 'e3',
    description: 'some bananas',
    amount: 9.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.99,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e6',
    description: 'Suit',
    amount: 88.99,
    date: new Date('2022-02-20'),
  },
  {
    id: 'e7',
    description: 'A Tie',
    amount: 18.99,
    date: new Date('2022-02-21'),
  },
  {
    id: 'e8',
    description: 'An Apple',
    amount: 1.99,
    date: new Date('2022-02-22'),
  },
  {
    id: 'e9',
    description: 'Hamburger',
    amount: 5.99,
    date: new Date('2022-02-22'),
  },
  {
    id: 'e10',
    description: 'Sausage',
    amount: 1.99,
    date: new Date('2022-02-23'),
  },
  {
    id: 'e11',
    description: 'Egg',
    amount: 0.99,
    date: new Date('2022-02-23'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...payload, id }, ...state];
    case 'UPDATE':
      const updateAbleExpenseIndex = state.findIndex(
        (expense) => expense.id === payload?.id
      );
      const updateAbleExpense = state[updateAbleExpenseIndex];
      const updatedItem = { ...updateAbleExpense, ...payload?.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateAbleExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== payload);
    default:
      return state;
  }
};

const ExpensesProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
