import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import List from './components/Users/List';
import './App.css';



function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = user => {
    setUsers(prevUsers => {
      return ([user, ...prevUsers])
    });
  };

  return (
    <div className="app">
      <div className="app__content">
        <AddUser onAddUser={addUserHandler}/>
        <List users={users}/>
      </div>
    </div>
  );
}

export default App;
