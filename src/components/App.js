import React from 'react';
import logo from '../logo.svg';
import '../assets/styles/css/App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
<<<<<<< HEAD
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';




=======
import MainAppBar from './MainAppBar.js';
>>>>>>> 7aec870b14dca84287597e05639ecb7b794836c8


function App() {
  return (
    <div className="App">
<<<<<<< HEAD



=======
    <MainAppBar/>
>>>>>>> 7aec870b14dca84287597e05639ecb7b794836c8
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
