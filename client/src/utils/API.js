import axios from "axios";

// /api/books (get) - Should return all saved books as JSON.

// /api/books (post) - Will be used to save a new book to the database.

// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

// * (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

export default {
  // Gets all books
  // getBooks: function () {
  //   return axios.get("/api/books");
  // },
  //Submit a search term to google books API
  bookSearch: function (query) {
    // TODO: Should this have like a try-catch or a .then/.catch?
    // return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
  },
  // Return list of all saved books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // DONT THINK WE NEED THIS ATM  // Gets the book with the given id
  //   getBook: function (id) {
  //     return axios.get("/api/books/" + id);
  //   },
};
