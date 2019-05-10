import React from 'react';

import Paper from '@material-ui/core/Paper';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import useInputState from '../hooks/useInputState';
import '../styles/TodoForm.css';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper className='TodoForm'>
      <ValidatorForm
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextValidator 
          autoFocus
          value={value} 
          onChange={handleChange} 
          margin='dense' 
          label='Add New Task' 
          fullWidth
          validators={['required']}
          errorMessages={['please enter a task']}
        />
      </ValidatorForm>
    </Paper>
  )
}

export default TodoForm;