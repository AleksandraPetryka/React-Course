import React, { useState, useRef } from 'react';
import './AddUser.css';
import Button from '../UI/Button';
import Modal from './Modal';
import { FORM_ERROR_ENUM } from './types';

function AddUser(props) {
  const nameInputRef = useRef(); //always is an object with a current prop
  const ageInputRef = useRef();

  const [error, setError] = useState(null);


  const validate = (name, age) => {
    if (name.trim().length === 0) {
      setError(FORM_ERROR_ENUM.NAME_EMPTY);
      return { isValid: false };
    }
    if (age.length === 0) {
      setError(FORM_ERROR_ENUM.AGE_EMPTY);
      return { isValid: false };
    }
    if (parseInt(age, 10) < 0) {
      setError(FORM_ERROR_ENUM.AGE_NEGATIVE);
      return { isValid: false };
    }

    return { isValid: true };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    const userEnteredData = {
      name: enteredUserName,
      age: enteredUserAge
    };

    const userData = {
      ...userEnteredData,
      id: Math.random().toString()
    };

    const { isValid } = validate(userData.name, userData.age);
    if (!isValid) {
      return;
    }
    props.onAddUser(userData);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler} className="form">
      { error && <Modal error={error} onClose={() => setError(null)} title="An error occured!" />}
      <div>
        <label className="form__label">
          Username
          <input
            type="text"
            className="form__input"
            ref={nameInputRef}
          />
        </label>
      </div>
      <div>
        <label className="form__label">
          Age (Years)
          <input
            type="number"
            step="1"
            className="form__input"
            ref={ageInputRef}
          />
        </label>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
}

export default AddUser;