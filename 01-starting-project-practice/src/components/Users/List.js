import React from 'react';
import './List.css';

function List(props) {
  console.log(`log: props = `, props);
  return (
    <div className="list">
      <ul className="list__ul">
        {props.users.map(user => (
          <li className="list__element">{user.name} ({user.age} years old)</li>
        ))}
      </ul>
    </div>
  );
}

export default List;