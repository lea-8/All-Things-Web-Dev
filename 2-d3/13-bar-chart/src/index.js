import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import * as d3 from "d3";
import { csv, arc, scaleBand, scaleLinear, max } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/lea-8/cdbf7b36665e5f22452126cf1eaf2c49/raw/f4ee0dad1f05858d9c614017956723c69d975505/UN_Population_2023.csv";

const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 20, left:20 };

const pieArc = arc().innerRadius(0).outerRadius(width);

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["Total"]; // wth is this notation?
      return d;
    };
    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map((d) => (
          <rect 
            x={0} 
            y={yScale(d.Country)} 
            width={xScale(d.Population)} 
            height={yScale.bandwidth()}
          />
        ))}
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
