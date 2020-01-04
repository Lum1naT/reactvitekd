import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

        <svg id="Vrstva_2" data-name="Vrstva 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.86 333"><defs><style>.cls-1{fill:#ff931e;}.cls-2{font-size:297.35px;fill:#fff;font-family:TrebuchetMS, Trebuchet MS;letter-spacing:-0.04em;}</style></defs><title>SolvLogoWhite</title><polygon class="cls-1" points="113.29 259 143.36 258.8 270.07 84.15 240.39 84.15 113.29 259"/><text class="cls-2" transform="translate(0 255.03)">solv</text><polygon class="cls-1" points="113.29 259 143.36 258.8 210.71 166.34 181.03 166.34 113.29 259"/></svg>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
