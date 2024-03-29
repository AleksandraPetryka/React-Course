import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from "./Todos.module.css";

const Todos: React.FC<{ onDeleteTodo: (id: string) => void; items: Todo[] }> = (props) => {


    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem onDeleteTodo={props.onDeleteTodo.bind(null, item.id)} key={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default Todos;