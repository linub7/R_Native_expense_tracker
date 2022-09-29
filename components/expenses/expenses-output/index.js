import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import ExpensesSummary from '../../expenses-summary';
import ExpensesList from '../expenses-list';

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

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default ExpensesOutput;
