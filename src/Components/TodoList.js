import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList(props) {
  return (
    <Paper>
      <List>
      {props.todos.map(todo => (
        <div key={todo.id}>
          <Todo {...todo}/>
          <Divider />
        </div>
      ))}
      </List>
    </Paper>
  )
}

export default TodoList;