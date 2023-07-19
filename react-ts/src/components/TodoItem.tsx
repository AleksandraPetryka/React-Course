import React from 'react';
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ onDeleteTodo: () => void ,text: string}> = (props) => {


    return  <li onClick={props.onDeleteTodo} className={classes.item}>{props.text}</li>
};

export default TodoItem;