import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <h2>My first component</h2>
//     </div>
//   );
// }

// function Greeting() {
//   return React.createElement(
//      'div',
//       {},
//       React.createElement('h2', {}, 'hello React')
//   )
// }

// function Greeting() {
//   return (
//     // <div>
//     <React.Fragment>
//       <div className='thisIsActuallyAClass'>
//         <h3>Hi</h3>
//         <ul>
//           <li>
//             <a href="#">link</a>
//           </li>
//         </ul>
//       </div>
//       <h2>problems?</h2>
//       <input type='text' name='' id='' />
//     </React.Fragment>  // </div>
//   );
// }

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Oed</h2>
const Message = () => {
  return <p>Message text!</p>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
