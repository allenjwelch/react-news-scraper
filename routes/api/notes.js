const router = require("express").Router();
const notesController = require("../../controllers/notesController");

//* Matches with "/api/articles/notes"
router
  .route("/notes")
    .post(notesController.create)
    .put(notesController.update)
    .delete(notesController.remove); 

module.exports = router;
