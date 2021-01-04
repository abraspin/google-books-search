import axios from "axios";

// apiKey = config.BOOKS_API_KEY;

export default {
  //Submit a search term to google books API
  bookSearch: function (query) {
    // TODO: Should this have like a try-catch or a .then/.catch?
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Return list of all saved books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log("🚀 ~ file: API.js ~ line 30 ~ I'm inside save book");
    return axios.post("/api/books", bookData);
  },
  // used to delete a book from the database by Mongo _id.
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // DONT THINK WE NEED THIS ATM  // Gets the book with the given id
  //   getBook: function (id) {
  //     return axios.get("/api/books/" + id);
  //   },
};
