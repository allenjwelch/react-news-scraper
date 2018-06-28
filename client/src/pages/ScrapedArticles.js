import React, {Component} from "react";
import API from "../utils/API";
import ArticleCard from "../components/ArticleCard";


// Require request and cheerio. This makes the scraping possible
// const request = require("request");
// const cheerio = require("cheerio");

class ScrapedArticles extends Component {
  state = {
    articles: [],
    title: "",
    summary: "",
    link: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getScrape()
      .then(res => {
        let reducedData = [];
        for (this.i=10; this.i < 31; this.i++) {
        reducedData.push(res.data[this.i]);
        }; 
      })
      .then(this.setState({ articles: this.reducedData, title: "", summary: "", link: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>ScrapedArticles</h2>
        {this.state.articles.length ? (
          <div className="articleCards">
            {this.state.articles.map(article => (
              <ArticleCard key={article.title}
                {...article}>
              </ArticleCard>
            ))}
          </div>
          ) : (
            <h3>No Results to Display</h3>
          )
        }
      </div>
    
    )
  }; 
};

export default ScrapedArticles; 
