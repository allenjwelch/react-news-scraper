import React, {Component} from "react";
import API from "../utils/API";
import SavedArticleCard from "../components/SavedArticleCard";
import DeleteArticleBtn from "../components/SavedArticle Btns/DeleteArticleBtn"; 
import AddNoteBtn from "../components/SavedArticle Btns/AddNoteBtn"; 


class SavedArticles extends Component {
  state = {
    articles: [],
    title: "",
    summary: "",
    link: "", 
    id: ""
  };

  styles = {
    head: {
      fontFamily: "'IM Fell DW Pica SC', serif",
    }
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getAllArticles()
      .then(res => {
        this.setState({ articles: res.data, title: "", summary: "", link: "" , id: ""});
        console.log(this.state.articles);
      })
      .catch(err => console.log(err));
  }; 

  deleteArt = id => {
    console.log(id); 
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  note = id => {
    console.log(id); 
    // API.saveArticle(addArticle)
  };

    render() {
      return (
        <div>
        <h2 style={this.styles.head}>SavedArticles</h2>
        {this.state.articles.length ? (
          <div className="articleCards">
            {this.state.articles.map(article => (
              <SavedArticleCard key={article.title}
                {...article}>
                <DeleteArticleBtn onClick={() => this.deleteArt(article._id)} />
                <AddNoteBtn onClick={() => this.note(article._id)} />
              </SavedArticleCard>
            ))}
          </div>
        ) : (
          <h4 style={this.styles.head}>No Results to Display</h4>
        )
        }
        </div>

      )
    }
};

export default SavedArticles;