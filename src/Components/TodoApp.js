import React, { useState } from 'react';

import uuid from 'uuid/v4';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Walk Drin', completed: false },
    { id: 2, task: 'Ask for treats', completed: true },
    { id: 3, task: 'Take nap', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
  }
  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }
  const toggleComplete = todoId => {
    const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)
    setTodos(updatedTodos);
  }
  return (
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
    >
      
      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <AppBar color='primary' position='static' style={{height: '64px', marginTop: '1rem'}}>
            <Toolbar>
              <Typography color='inherit'>
                {todos.length === 1 
                  ?  
                  <p><strong>{todos.length}</strong> task left</p> 
                  : 
                  <p><strong>{todos.length}</strong> tasks left</p>
                }
              </Typography>
            </Toolbar>
          </AppBar>
          <TodoForm addTodo={addTodo} />
          {todos.length ? 
            <TodoList 
              todos={todos} 
              removeTodo={removeTodo} 
              toggleComplete={toggleComplete}
            /> : null
          }
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;