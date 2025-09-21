import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import * as d3 from "d3";
import { arc, pie } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/lea-8/9b302aba8a848bfb7d7c424baede2522/raw/CSS_named_colours.csv";

const width = 480;
const height = 250;
const centreX = width / 2;
const centreY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(width);

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const colorPie = pie().value(1);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centreX}, ${centreY})`}>
        {
          colorPie(data).map((d) => (
            <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
          ))
          // Old (un-refactoring) code below
          // data.map((d, i) => (
          //   <path
          //     fill={d["RGB hex value"]}
          //     d={pieArc({
          //       startAngle: (i / data.length) * 2 * Math.PI,
          //       endAngle: ((i + 1) / data.length) * 2 * Math.PI,
          //     })}
          //   />
          // ))
        }
      </g>
    </svg>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
