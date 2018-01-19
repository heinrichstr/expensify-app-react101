// export default (expenses = []) => { // expenses = state.expenses called in component mapStateToProps
//     let amounts;
//     let total;

//     if (expenses.length === 0) {
//         amounts = [expenses.length];
//         const reducer = (sum, currentValue) => sum + currentValue;
//         total = amounts.reduce(reducer, 0);
//     } else {
//         amounts = expenses.map((expenses) => expenses.amount);
//         const reducer = (sum, currentValue) => sum + currentValue;
//         total = amounts.reduce(reducer, 0);
//     }

//     const expensesNumber = expenses.length;
//     return { total, expensesNumber };
// };

export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};