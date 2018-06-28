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
        let i = 10; 
        for (i; i < 30; i++) {
          reducedData.push(res.data[i]);
        };  
        this.setState({ articles: reducedData, title: "", summary: "", link: "" });
        // console.log(this.state.articles);
      })
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
