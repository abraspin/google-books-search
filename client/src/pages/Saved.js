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
  if (books) {
    console.log("I THINK THERE ARE BOOKS", books);
  }

  function deleteBook(id) {
    let newBooks = books.filter((book) => {
      return book._id != id;
    });
    setBooks(newBooks);
  }

  return (
    <div>
      {books.length ? (
        books.map((book, key) => {
          // const key = book._id;

          return (
            <SavedBookCard
              key={key}
              deleteBook={deleteBook}
              savedBook={book}
            ></SavedBookCard>
          );
        })
      ) : (
        <div className="container">
          <div className="row text-center border rounded pb-4  bg-secondary">
            <h3>
              <br></br>
              Saved books from the search will appear here!
              <small> (Once you save some!)</small>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
