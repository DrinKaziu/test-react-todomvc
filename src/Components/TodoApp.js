import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from './TodoList';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Walk Drin', completed: false },
    { id: 2, task: 'Ask for treats', completed: true },
    { id: 3, task: 'Take nap', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos)
  return (
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
    >
      <AppBar color='default' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>To-Do</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  )
}

export default TodoApp;