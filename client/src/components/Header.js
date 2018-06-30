import React from "react";

const styles = {
  container: {
    margin: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    // height: "50%",
    // width: "50%",
    // backgroundImage: "url(../images/newspaper.jpg)",
    backgroundSize: "cover",
  }, 
  parallaxImg: {
    // position: "fixed", 
    // top: "0", 
    // left: "0", 
    zIndex: "0",
    height: "50%",
    width: "50%",
    backgroundImage: "url(../images/newspaper.jpg)",
    backgroundSize: "cover",

    // background-position: right top;

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
  <div className="container" style={styles.container}>
    {/* <div className="image"><img id="parallaxImg" alt="newspaper"/></div> */}
    <div className="title col s8 center" style={styles.title}>
      <h1 className="center-align" id="titleText" style={styles.titleText}>News Scraper</h1>
      <h4 className="center-align" id="subText" style={styles.subText}>New York Times</h4>
      <a id="scrapeBtn" className="waves-effect waves-light btn" href="/articles/scraped"><i className="material-icons right">file_download</i>Scrape News</a>
    </div>
  </div>
); 

export default Header; 