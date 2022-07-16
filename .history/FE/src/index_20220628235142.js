import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// TailWind & TailWind Elements
import './tailwind/output.css';
import '../node_modules/tw-elements/dist/js/index.min.js';
import { store } from './store/store';
import { Provider } from 'react-redux';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();