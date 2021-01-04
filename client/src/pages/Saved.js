import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import API from "../utils/API";
import SavedBookCard from "../Components/SavedBookCard";

function Search() {
  // Load all books and store them with setBooks
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    console.log("I'm in loadbooks");
    API.getSavedBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {/* TODO: Should this be books.length? It crashed it one time... */}
      {books ? (
        books.map((book) => {
          const key = book._id;

          return <SavedBookCard savedBook={book}></SavedBookCard>;
        })
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Search;
