const router = require("express").Router();
const articleRoutes = require("./articles");
const NotesRoutes = require("./notes");

// Article routes
router.use("/articles", articleRoutes);

// Notes routes
router.use("/notes", NotesRoutes)

module.exports = router;