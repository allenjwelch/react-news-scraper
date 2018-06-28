import React from "react";

const ArticleCard = props => (
  <div class="row">
    <div class="col l12 m12 s12">
      <div class="card cyan darken-3 white-text">
        <div class="card-content">
          <span class="card-title">{props.title}</span>
          <p>{props.summary}</p>
        </div>
        <div class="card-action teal lighten-4">
          <a class="orange-text" href="{props.link}" target="_blank">Read More</a>
          <a id="save" class="waves-effect waves-light btn"><i class="material-icons right">save</i>Save Article</a>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard; 