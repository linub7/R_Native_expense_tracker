import { useContext } from 'react';
import ExpensesOutput from '../components/expenses/expenses-output';
import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={'Total'}
      fallbackText="No Expenses Registered Expenses Found"
    />
  );
};

export default AllExpenses;
