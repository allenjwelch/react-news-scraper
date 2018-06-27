import React from "react";

const styles = {
  img: {
    height: "20px", 
    width: "20px", 
    margin: "0 10px"
  },
  footer: {
    background: "#202020",
    color: "#ffffff", 
    padding: "5px"
  }
}

const Footer = () => (
  <footer className="footer valign-wrapper cyan darken-3" style={styles.footer}>
    <div className="bottom left valign-wrapper">
      React News Scraper
      <img src="../images/favicon.ico" alt="react" style={styles.img}/>
    </div>
  </footer>
); 

export default Footer; 