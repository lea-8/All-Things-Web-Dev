import ReactDOM from "react-dom/client";

import "./index.css";

// Book list used: https://www.nytimes.com/books/best-sellers/combined-print-and-e-book-fiction/

const books = [
  {
    author: 'Callie Hart',
    title: 'Quicksilver (Deluxe Limited Edition)',
    img: './images/book1.jpg'
  },
  {
    author: 'Nicholas Sparks',
    title: 'Remain',
    img: 'https://static01.nyt.com/bestsellers/images/9798217154043.jpg'
  }
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  console.log(name);
});

const BookList = () => {
  return (
    <section className="booklist">
      {names}
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
