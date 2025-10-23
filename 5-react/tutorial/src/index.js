import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: 'Callie Hart',
  title: 'Quicksilver (Deluxe Limited Edition)',
  img: './images/book1.jpg'
};

// Book list used: https://www.nytimes.com/books/best-sellers/

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      {/* <Book author={author} title={title} img={img} /> */}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
