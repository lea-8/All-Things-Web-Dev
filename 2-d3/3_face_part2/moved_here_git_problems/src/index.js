import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { arc } from 'd3';

// console.log(arc)

const width = 960;
const height = 500;
const centreX = width / 2;
const centreY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;

// Face: height/2 - strokeWidth / 2 
// Eyes: centerX - eyeOffsetX

const App = () => {
  return (
    <svg width={width} height={height}>
      <circle 
        cx={centreX} 
        cy={centreY} 
        r={centreY - (strokeWidth / 2)} 
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle 
        cx={centreX - eyeOffsetX}
        cy={centreY - eyeOffsetY}
        r={eyeRadius}
      />
      <circle 
        cx={centreX + eyeOffsetX}
        cy={centreY - eyeOffsetY}
        r={eyeRadius}
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
