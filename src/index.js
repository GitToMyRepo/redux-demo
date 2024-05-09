import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// reducer performs some action depending on the action type
console.log('declare reducer');
const reducer = (state = 0, action) => {
  console.log('reducer called');
  console.log('reducer state: ', state);
  console.log('reducer action: ', action);
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  }
  console.log('reducer returning state: ', state);
  return state;
};

console.log('createStore');
const store = createStore(reducer);

//using the subscribe function, we're registering a callback function that will be called once the store is changed.
console.log('subscribe to register a callback function');
store.subscribe(() => {
  console.log('current state', store.getState());
});

console.log('store dispatch INCREMENT');
store.dispatch({
  type: 'INCREMENT'
});

console.log('store dispatch INCREMENT');
store.dispatch({
  type: 'INCREMENT'
});

console.log('store dispatch DECREMENT');
store.dispatch({
  type: 'DECREMENT'
});

console.log('store dispatch No_CAHNGE');
store.dispatch({
  type: 'No_CAHNGE'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();