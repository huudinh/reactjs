import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import allReducers from "./reducers";
const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

