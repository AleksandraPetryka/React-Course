import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { validationContent } from './types';
import Button from '../UI/Button';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} ></div>
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
    <header className={classes.header}>
      <h2>
        {props.title}
      </h2>
    </header>
    <div className={classes.content} >
      <p>{validationContent[props.error]}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onClose}>Okay</Button>
    </footer>
  </div>
  );
};

function Modal(props) {
  // console.log(`log: content.props.error = `, content[props.error]);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} error={props.error} onClose={props.onClose}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
}

export default Modal;