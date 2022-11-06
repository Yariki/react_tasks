import React from "react";
import { ModalProps } from "./types";

export const Modal: React.FunctionComponent<ModalProps> = (
  props: ModalProps
) => {
  return (
    <div id={props.id} className={props.isShown ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">{props.children}</section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            onClick={props.saveAction?.action}
          >
            {props.saveAction?.label}
          </button>
          <button className="button" onClick={props.cancelAction?.action}>
            {props.cancelAction?.label}
          </button>
        </footer>
      </div>
    </div>
  );
};
