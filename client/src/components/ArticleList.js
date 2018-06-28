import React from "react";

export const ArticleList = ({ children }) => {
  return (
    <div class="row">
      <div class="col l12 m12 s12">
    
          <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};