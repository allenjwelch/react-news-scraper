import React from "react";

const styles = {
  parallaxContainer: {
    margin: "0",
    width: "100%",
  }, 
  parallaxImg: {
    height: "100%",
    width: "100%",
    background: "url(../images/newspaper.jpg)",
  }, 
  title: {
    margin: "150px auto",
    maxWidth: "500px",
    borderRadius: "20px",
    background: "rgba(245, 245, 245, 0.726)",
    fontFamily: "'IM Fell DW Pica SC', serif",
    padding: "10px",
  }, 
  titleText: {
    margin: "0",
  },
  subText: {
    margin: "0",
  }
}

const Header = () => (
  <div className="parallax-container" style={styles.parallaxContainer}>
    <div className="parallax"><img id="parallaxImg" style={styles.parallaxImg} src="../images/newspaper.jpg" /></div>
    <div className="title col s8 center" style={styles.title}>
      <h1 className="center-align" id="titleText" style={styles.titleText}>News Scraper</h1>
      <h4 className="center-align" id="subText" style={styles.subText}>New York Times</h4>
      <a id="scrapeBtn" className="waves-effect waves-light btn hide-on-med-and-up"><i className="material-icons right">file_download</i>Scrape News</a>
    </div>
  </div>
); 

export default Header; 