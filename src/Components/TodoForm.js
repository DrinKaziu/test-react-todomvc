import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import useInputState from '../hooks/useInputState';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
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