import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { arc } from 'd3';

console.log(arc)

const width = 960;
const height = 500;
const circleRadius = 50;
const initialMousePosition = { x: width / 2, y: height / 2 }

const App = () => {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);
  const handleMouseMove = useCallback(event => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY});
  }, [setMousePosition]);
  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle 
        cx={mousePosition.x}
        cy={mousePosition.y}
        r={circleRadius}
      />
    </svg>
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
