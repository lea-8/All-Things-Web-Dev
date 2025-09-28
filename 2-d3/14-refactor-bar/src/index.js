import React from "react";
import ReactDOM from "react-dom/client";
import { arc, scaleBand, scaleLinear, max, format } from "d3";
import { useData } from "./chart/useData";
import { AxisBottom } from "./chart/AxisBottom";
import { AxisLeft } from "./chart/AxisLeft";
import { Marks } from "./chart/Marks";

const width = 720;
const height = 350;
const margin = { top: 20, right: 30, bottom: 65, left: 200 };
const xAxisLabelOffset = 45;

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

  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom 
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text 
          className="axis-label" 
          x={innerWidth / 2} 
          text-anchor="middle" 
          y={innerHeight + xAxisLabelOffset}
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
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
