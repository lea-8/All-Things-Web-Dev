import ReactDOM from "react-dom/client";

import "./index.css";
const author = 'Callie Hart';
const title = 'Quicksilver (Deluxe Limited Edition)';
const img = './images/book1.jpg';

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
    <article className='book'>
      {/* <Image />
      <Title />
      <Author /> */}
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* Statement won 't cut it
      <p>{let x = 6}</p>
      But expresseion will
      <p>{6 + 6}</p> */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
