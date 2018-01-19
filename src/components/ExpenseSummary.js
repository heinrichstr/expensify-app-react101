import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

//{numeral(amount / 100).format('$0,0.00')} 

export const ExpenseSummary = (props) => (
    <div>
        <p>Viewing {
            `${props.expenses.length} expense${props.expenses.length > 1 ? 's' : '' }`
        } totalling {
            numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')
        }</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses)
    };
};
  
export default connect(mapStateToProps)(ExpenseSummary);