import ReactDOM from "react-dom/client";

import "./index.css";

// Book list used: https://www.nytimes.com/books/best-sellers/

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      {/* <Image />
      <Title />
      <Author /> */}
      <img src="./images/book1.jpg" alt="Quicksilver (Deluxe Limited Edition)" />
      <h2>Quicksilver (Deluxe Limited Edition)</h2>
      <h4>Callie Hart</h4>
    </article>
  );
};

// const Image = () => (
// );
// const Title = () => ;
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
