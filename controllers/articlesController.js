const db = require("../models");
const request = require("request");
const cheerio = require("cheerio");


// Defining methods for the ArticlesController
module.exports = {
  scrape: function(req, res) {
    //! NOT SURE HOW TO CHANGE FROM JQUERY
    request("https://www.nytimes.com/section/us", function(error, response, html) {
      let $ = cheerio.load(html);
      let results = [];
      $("div.story-body").each(function(i, element) {
        
        let title = $(element).children().children().children("h2.headline").text().trim();
        let summary = $(element).children().children().children("p.summary").text();
        let link = $(element).children().attr("href");
        results.push({
          title: title,
          summary: summary,
          link: link
        });      
      });
      console.log("articles scraped"); 
      res.json(results); 
    })
  },
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .populate("note")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
