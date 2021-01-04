const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/posts" //TODO: Why/how does it?
router
  // root
  .route("/")
  // get all saved books
  .get(booksController.findAll)
  // create new saved book record
  .post(booksController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  //   helper for delete?
  .get(booksController.findById)
  //   update books- unused?
  .put(booksController.update)
  //   remove saved book from DB
  .delete(booksController.remove);

module.exports = router;
