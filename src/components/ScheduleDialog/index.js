import { useState } from "react";

function ScheduleDialog(props) {
  const {title, description, author: { name, shortBio }, closeDialog} = props;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeDialog}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={closeDialog}></button>
        </header>
        <section className="modal-card-body">
          <p>{ description }</p>
          <p>{name}</p>
          <p>{shortBio}</p>
        </section>
        <footer className="modal-card-foot">
          <p>Dia XX/XX, às 14h</p>
        </footer>
      </div>
    </div>
  );
}

export default ScheduleDialog;