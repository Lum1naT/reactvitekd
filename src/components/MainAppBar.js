import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../assets/svgs/SolvLogoWhite.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MainAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

        <Logo />

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
