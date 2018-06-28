import React from "react";

const ArticleCard = props => (
  <div className="row">
    <div className="col l12 m12 s12">
      <div className="card cyan darken-3 white-text">
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p>{props.summary}</p>
        </div>
        <div className="card-action teal lighten-4">
          <a className="orange-text" href={props.link} target="_blank">Read More</a>
          <a id="save" className="waves-effect waves-light btn"><i className="material-icons right">save</i>Save Article</a>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard; 