import PropTypes from "prop-types";
import BooksCard from "./BooksCard";

const BooksCards = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 cl:grid-cols-4">
      {books.map((item) => (
        <BooksCard key={item._id} book={item}/>
      ))}
    </div>
  );
};

BooksCards.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      publishYear: PropTypes.number,
    })
  ).isRequired,
};

export default BooksCards;
