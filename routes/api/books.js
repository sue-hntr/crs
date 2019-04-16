const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);


router.route("/saved")
  .get(booksController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
