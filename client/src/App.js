import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ScrapedArticles from "./pages/ScrapedArticles"; 
import SavedArticles from "./pages/SavedArticles"; 
import NoArticles from "./pages/NoArticles"; 
import Nav from "./components/Navbar";
import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={NoArticles} />
            <Route exact path="/articles/scraped" component={ScrapedArticles} />
            <Route exact path="/articles" component={SavedArticles} />
            <Route component={NoArticles} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
