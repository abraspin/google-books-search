import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import ResultItem from "../Components/ResultItem";
import API from "../utils/API";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="container border p-2">
        <form>
          <div className="form-group">
            <label>Book Search</label>
            <input
              type="string"
              className="form-control"
              placeholder="Enter book to search"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Search <i class="fa fa-search fa-sm"></i>
          </button>
        </form>
      </div>
      <br></br>
      {/* TODO: Add a ternary operator for if !results.length "No results to display" or something */}
      <div className="container border">
        <h1 className="p-2 font-weight-bold font-italic">Results</h1>
        <hr></hr>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
      </div>
    </div>
  );
}

export default Search;
