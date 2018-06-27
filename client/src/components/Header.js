import React from "react";

const styles = {
  
}

const Header = () => (
  <div className="parallax-container">
    <div className="parallax"><img id="parallaxImg" src="images/newspaper.jpg" /></div>
    <div className="title col s8 center">
      <h1 className="center-align" id="titleText">News Scraper</h1>
      <h4 className="center-align" id="subText">New York Times</h4>
      <a id="scrapeBtn" className="waves-effect waves-light btn hide-on-med-and-up"><i className="material-icons right">file_download</i>Scrape News</a>
    </div>
  </div>
); 

export default Header; 