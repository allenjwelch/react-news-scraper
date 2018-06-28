const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

//* Matches with "/api/articles/scraped"
router
  .route("/scraped")
      .get(articlesController.scrape)

//* Matches with "/api/articles"
router
    .route("/")
      .post(articlesController.create)
      .get(articlesController.findAll);

//* Matches with "/api/articles/:id" 
router
  .route("/:id")
    .get(articlesController.findById)
    .delete(articlesController.remove);
    
    // .put(articlesController.update)




module.exports = router;
