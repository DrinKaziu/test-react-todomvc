import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, idx) => (
          <div key={todo.id}>
            <Todo 
              {...todo} 
              removeTodo={removeTodo} 
              toggleComplete={toggleComplete}
            />
            {idx < todos.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;