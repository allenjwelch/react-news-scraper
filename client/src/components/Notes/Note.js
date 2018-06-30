import React from "react";
import "./Note.css"
// import API from "../../utils/API";



const Note = props => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";
  

  return (
    <div className={props.show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <h5 id='noteTitle' className='center-align'>{props.articleTitle}</h5>
        <input id='titleInput' name='title' placeholder='Note Title' />
        <textarea id='bodyInput' name='body'></textarea>
        {props.children}
      </section>
    </div>
  );
};

export default Note; 