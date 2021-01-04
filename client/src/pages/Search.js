import { useState, useEffect, useRef } from "react";
import NavBar from "../Components/NavBar";
import ResultItem from "../Components/ResultItem";
import API from "../utils/API";

function Search() {
  const bookSearchRef = useRef();
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // //TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO: this should go in saved searches I think
  // // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks();
  // }, []);

  // // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then((res) => {
  //       console.log(
  //         "🚀 ~ file: Search.js ~ line 21 ~ .then ~ res.data",
  //         res.data
  //       );
  //       setBooks(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    API.bookSearch(bookSearchRef.current.value)
      .then((data) => {
        console.log("HERE IS THE DATA FROM THAT API CALL:", data.data.items);
        setBooks(data.data.items);
      })
      .then(console.log("I JUST SET BOOKS TO:", books))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container border p-2">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Book Search</label>
            <input
              required
              ref={bookSearchRef}
              type="string"
              className="form-control"
              placeholder="Enter book to search"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Search <i className="fa fa-search fa-sm"></i>
          </button>
        </form>
      </div>
      <br></br>
      {/* TODO: Add a ternary operator for if !results.length "No results to display" or something */}
      <div className="container border">
        <h1 className="p-2 font-weight-bold font-italic">Results</h1>
        <hr></hr>
        {books ? (
          books.map((book) => {
            console.log(
              "🚀 ~ file: search.js ~ line 68 ~ {books.map ~ book IN THE MAP FUNCTION",
              book
            );
            // console.log(book.volumeInfo.title);
            // console.log(book.volumeInfo.authors);
            // console.log(book.volumeInfo.description);
            // console.log(book.volumeInfo.imageLinks.thumbnail);
            // console.log(book.volumeInfo.previewLink);
            return <ResultItem bookInfo={book.volumeInfo}></ResultItem>;
          })
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
}

export default Search;
