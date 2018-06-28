import React from "react";

const styles = {
  navWrapper: {
    margin: "auto 10px", 
    fontFamily: "'IM Fell Great Primer', serif",
  },
}

const Nav = props => (
  <nav className="cyan darken-3">
    <div className="nav-wrapper" style={styles.navWrapper}>
      <a href="#" className="brand-logo left show-on-medium-and-up">News Scraper</a>
      {/* <a href="#" className="brand-logo left hide-on-small-only">News</a>  */}
      <ul id="nav-mobile" className="right valign-wrapper">
        {/* <li><a id="scrapeBtn" className="waves-effect waves-light btn right hide-on-small-only" onClick={() => scrape()}><i className="material-icons right">file_download</i>Scrape News</a></li> */}
        <li><a id="home" href="#">Home</a></li>
        <li><a id="savedArticles" href="#">Saved Articles</a></li>
      </ul>
    </div>
  </nav>
); 

export default Nav;
