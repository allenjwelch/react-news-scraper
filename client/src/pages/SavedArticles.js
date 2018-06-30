import React, {Component} from "react";
import API from "../utils/API";
import SavedArticleCard from "../components/SavedArticleCard";
import DeleteArticleBtn from "../components/Buttons/DeleteArticleBtn"; 
import AddNoteBtn from "../components/Buttons/AddNoteBtn";  
import SaveNoteBtn from "../components/Buttons/SaveNoteBtn";  
import Note from "../components/Notes/Note"; 


class SavedArticles extends Component {
  state = {
    articles: [],
    title: "",
    summary: "",
    link: "", 
    id: "", 
    show: false, 
  };

  styles = {
    head: {
      fontFamily: "'IM Fell DW Pica SC', serif",
    }, 
    buttons: {
      margins: "20px"
    }
  }

  showNote = () => {
    this.setState({ show: true });
  };

  hideNote = () => {
    this.setState({ show: false });
  };

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
    API.getArticle(id)
      .then(this.showNote())
      // .then
  }

  saveNote(id) {
    console.log(id); 
    API.saveNote(id)
      .then(this.hideNote())
      // .then(res => this.loadArticles())
      .catch(err => console.log(err));
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
                <DeleteArticleBtn style={this.styles.buttons} onClick={() => this.deleteArt(article._id)} />
                <AddNoteBtn style={this.styles.buttons} onClick={() => this.note(article._id)} />
                  <Note show={this.state.show} handleClose={this.hideNote} articleTitle={article.title}>
                    <SaveNoteBtn onClick={() => this.saveNote(article._id)} />
                  </Note>        
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