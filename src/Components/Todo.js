import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'; //allows us to have secondary list items on the right side

import '../styles/Todo.css';

function Todo(props) {
  const { id, task, completed, removeTodo, toggleComplete } = props;
  return (
    <div className='Todo'>
      <ListItem>
        <Checkbox checked={completed} onChange={() => toggleComplete(id)}/>
        <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton className='Todo-delete-btn' aria-label='Delete' onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}

export default Todo; 