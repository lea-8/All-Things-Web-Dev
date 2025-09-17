import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import * as d3 from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/lea-8/9b302aba8a848bfb7d7c424baede2522/raw/CSS_named_colours.csv";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return data.map((d) => (
    <div
      style={{
        backgroundColor: d["RGB hex value"],
        width: "950px",
        height: "4px",
      }}
    />
  ));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
