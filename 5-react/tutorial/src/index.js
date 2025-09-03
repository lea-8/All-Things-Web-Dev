import ReactDOM from "react-dom/client";

const BookList = () => {
  return <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => 
<img 
  src='https://static01.nyt.com/bestsellers/images/9781538774205.jpg'
  alt='Quicksilver (Deluxe Limited Edition)'
/>
const Title = () => <h2>Quicksilver (Deluxe Limited Edition)</h2>
const Author = () => {
  return <h4>Callie Hart</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);