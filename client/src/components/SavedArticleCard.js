import React from "react";

const SavedArticleCard = props => (
  <div className="row">
    <div className="col l12 m12 s12">
      <div className="card cyan darken-3 white-text">
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p>{props.summary}</p>
        </div>
        <div className="card-action teal lighten-4">
          <a className="orange-text" href={props.link} target="_blank">Read More</a>
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export default SavedArticleCard; 