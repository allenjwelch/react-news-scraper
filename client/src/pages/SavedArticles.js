import React, {Component} from "react";
import API from "../utils/API";
import SavedArticleCard from "../components/SavedArticleCard";


class SavedArticles extends Component {
  state = {
    articles: [],
    title: "",
    summary: "",
    link: "", 
    id: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getAllArticles()
      .then(res => {
        this.setState({ articles: res.data, title: "", summary: "", link: "" , id: ""});
        // console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  }; 


    render() {
      return (
        <div>
        <h2>SavedArticles</h2>
        {this.state.articles.length ? (
          <div className="articleCards">
            {this.state.articles.map(article => (
              <SavedArticleCard key={article.title}
                {...article}>
              </SavedArticleCard>
            ))}
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )
        }
        </div>

      )
    }
};

export default SavedArticles;