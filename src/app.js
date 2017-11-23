import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 2500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 12500, createdAt: 122500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 100000, createdAt: -500 }));
const currentVisableExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);
console.log(currentVisableExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>	
);

ReactDOM.render(jsx, document.getElementById('app'));