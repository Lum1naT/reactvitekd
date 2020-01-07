import React from 'react';
import logo from '../logo.svg';
import '../assets/styles/css/App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';






function MyAppBar() {
  return (
    <div className="MyAppBar">

    <AppBar position="static">
    <Toolbar>

    <Typography variant="h5">
         David Vítek
    </Typography>
    </Toolbar>
    </AppBar>
    </div>
  );
}

export default AppBar;
