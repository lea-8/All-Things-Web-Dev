import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: 'Callie Hart',
  title: 'Quicksilver (Deluxe Limited Edition)',
  img: './images/book1.jpg'
};
const secondBook = {
  author: 'Nicholas Sparks',
  title: 'Remain',
  img: 'https://static01.nyt.com/bestsellers/images/9798217154043.jpg'
};

// Book list used: https://www.nytimes.com/books/best-sellers/combined-print-and-e-book-fiction/

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
        {/* <p>Lorem ipsum dolor...</p>
        <button>Click me</button> */}
      </Book>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
  );
};

const Book = (props) => {
  // const { title, author, img, children } = props;
  const { title, author, img } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {children} */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
