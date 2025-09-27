import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { csv, arc, scaleBand, scaleLinear, max } from "d3";
import { useData } from './chart/useData';
import { AxisBottom } from './chart/AxisBottom';
import { AxisLeft } from './chart/AxisLeft';
import { Marks } from './chart/Marks';

const width = 600;
const height = 350;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };

const pieArc = arc().innerRadius(0).outerRadius(width);

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft yScale={yScale} />
        <Marks data={data} xScale={xScale} yScale={yScale}  xValue={xValue} yValue={yValue} />
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
