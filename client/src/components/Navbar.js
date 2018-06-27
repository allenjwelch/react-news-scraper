import React from "react";

const styles = {
  
}

const Nav = props => (
  <nav className="cyan darken-3">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo left hide-on-small-only	">News Scraper</a>
      <a href="#" className="brand-logo left show-on-small">News</a>
      <ul id="nav-mobile" className="right">
        <li><a id="scrapeBtn" className="waves-effect waves-light btn right hide-on-small-only"><i className="material-icons right">file_download</i>Scrape News</a></li>
        <li><a id="home" href="./index.html">Home</a></li>
        <li><a id="savedArticles" href="#">Saved Articles</a></li>
      </ul>
    </div>
  </nav>
); 

export default Nav;
