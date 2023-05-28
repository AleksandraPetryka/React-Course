import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [ modalIsOpen, setModalsOpen ] = useState(false);

  function deleteHandler() {
    setModalsOpen(true);
  }

  function closeModalHandler() {
    setModalsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
    </div>
  )
}

export default Todo;