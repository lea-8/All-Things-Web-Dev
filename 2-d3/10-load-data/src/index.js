import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import * as d3 from 'd3';
import { message } from './message';

const csvUrl = "https://gist.githubusercontent.com/lea-8/9b302aba8a848bfb7d7c424baede2522/raw/CSS_named_colours.csv";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  return <pre>{data ? message(data) : 'Loading...'}</pre>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
