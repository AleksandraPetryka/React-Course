import React, { useState } from 'react';

const DzieckoNaukaPropsow = (props) => {
  const [alertMessage, setAlertMessage] = useState('');

  let clickHandler = (event) => {
    props.onWywolajAlert(alertMessage);
  }

  const alertChangeHandler = (event) => {
    setAlertMessage(event.target.value);
  };

  return (
    <div>
      <p>Jestem dzieckiem</p>
      <button type="submit" onClick={clickHandler}>text</button>
      <input type="text" value={alertMessage} onChange={alertChangeHandler}/>
    </div>
  );
};

export default DzieckoNaukaPropsow;