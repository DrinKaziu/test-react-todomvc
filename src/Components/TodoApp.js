import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function TodoApp() {
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
    </Paper>
  )
}

export default TodoApp;