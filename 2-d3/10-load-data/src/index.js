import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { arc } from 'd3';

console.log(arc)

const csvUrl = "https://gist.githubusercontent.com/eazXneo/9b302aba8a848bfb7d7c424baede2522/raw/CSS_named_colours.csv";
const width = 960;
const height = 500;

const App = () => {
  const [data, setData] = useState(null);

  // The peferrable d3-csv organisation.
  d3.csv(csvUrl).then(data => {
    let message = "";
    message += Math.round(d3.csvFormat(data).length / 1024) + " kB\n";
    message += data.length + " rows\n";
    message += data.columns.length + " columns";
  });

  return (

  );
};

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
