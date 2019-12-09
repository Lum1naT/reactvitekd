import React from 'react';
import logo from '../logo.svg';
import '../assets/styles/css/App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



function App() {
  return (
    <div className="App">
    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<Paper
classname="paperDefault"
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
    </div>
  );
}

export default App;