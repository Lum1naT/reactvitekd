import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../assets/svgs/SolvLogoWhite.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

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
      <AppBar position="static" className="headerBar">

        <Toolbar>
<SvgIcon className="headerLogo">
        <Logo />
</SvgIcon>
<Router>
       <div>
         <h2>Welcome to React Router Tutorial</h2>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <ul className="navbar-nav mr-auto">
           <li><Link to={'/'} className="nav-link"> Home </Link></li>
           <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
           <li><Link to={'/about'} className="nav-link">About</Link></li>
         </ul>
         </nav>
         <hr />
         <Switch>
             <Route exact path='/' component={Home} />
             <Route path='/contact' component={Contact} />
             <Route path='/about' component={About} />
         </Switch>
       </div>
     </Router>
        </Toolbar>
      </AppBar>
    </div>
  );
}
