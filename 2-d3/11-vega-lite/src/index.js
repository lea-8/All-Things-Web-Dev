import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import { config } from './visualisation/config';
import { getData } from './visualisation/getData';
import { viz } from './visualisation/visu';

vl.register(vega, vegaLite, {
  view: { renderer: 'svg' },  // use canvas if >10,000 data points
  init: view => { view.tooltip(new Handler().call); }
});

const run = async () => {
  const marks = viz
    .data(await getData())
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({ type: 'fit', contains: 'padding' })
    .config(config);
  
  document.body.appendChild(await marks.render());
};
run();

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
