import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import logo from '../logo.svg';
import '../assets/styles/css/App.css';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import MainAppBar from './MainAppBar.js';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  MainAppBar: {
    position: 'fixed',
    background: theme.palette.purple,
  }
}));




function App() {
  const classes = useStyles();

  return (
    <div className="App">

    <MainAppBar/>





    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={3}
>


<Grid item xs={12} sm={5}>

<Paper
className="paperDefault"
>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
        </Switch>
                </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Paper>
      </Grid>

      <Grid item xs={12} sm={3}>

      <Paper
      className="paperDefault"
      >

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
            </Paper>
            </Grid>

            <Grid item xs={12} sm={3}>

            <Paper
            className="paperDefault"
            >

                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                  </header>
                  </Paper>
                  </Grid>

      </Grid>

    </div>
  );
}

export default App;
