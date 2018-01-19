import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should correctly add up single expense', () => {
    const result = getExpensesTotal([expenses[2]]);
    expect(result).toBe(4500);
});

test('Should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});