import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = props;
  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form 
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField 
          value={value} 
          onChange={handleChange} 
          margin='dense' 
          label='New' 
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm;