import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import headerlogo from './header1.png';
import { Link } from 'react-router-dom';
import {TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Select}from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //fontFamily: 'Optima',
  },
  headimages: {
    width: "700px",
    height: "250px",
  },
}));

function App() {
  const classes = useStyles();

  const [racevalue, setRaceValue] = React.useState("");
  const [genrevalue, setGenreValue] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
    Race: ${racevalue}
    Genre: ${genrevalue}
    `);

    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={headerlogo} className={classes.headimages} alt="Logo: The Book Matcher"/>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Link to="/HowItWorks">
          About TBM
          </Link></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Link to='/HowItWorks'> How TBM Works
          </Link></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Link to='/MyBookMatches'> My Books
          </Link></Paper>
        </Grid>
      </Grid>
      </header>

      <body className="App-body">
          <br />
          Please enter some basic information so we can get started!
          <br />
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Enter your name" variant="outlined" />
        <br />
        <br />
    <FormControl component="fieldset">
      <FormLabel component="legend">What is your favorite book genre?</FormLabel>
      <RadioGroup aria-label="genre" name="genre" value={genrevalue} onChange ={e => setGenreValue(e.target.value)}>
        <FormControlLabel value="romance" control={<Radio />} label="Romance" />
        <FormControlLabel value="nonfiction" control={<Radio />} label="Nonfiction" />
        <FormControlLabel value="fiction" control={<Radio />} label="Fiction" />
      </RadioGroup>
    </FormControl>
    <br />
    <br />
    <FormControl component="fieldset">
      <FormLabel component="legend">What is your race?</FormLabel>
      <RadioGroup aria-label="race" name="race1" value={racevalue} onChange ={e => setRaceValue(e.target.value)}>
        <FormControlLabel value="Black" control={<Radio />} label="Black" />
        <FormControlLabel value="Latinx" control={<Radio />} label="Latinx" />
        <FormControlLabel value="AsianorPacificIslander" control={<Radio />} label="Asian/Pacific Islander" />
        <FormControlLabel value="Indigenous" control={<Radio />} label="Indigenous" />
        <FormControlLabel value="Mixed" control={<Radio />} label="Mixed" />
      </RadioGroup>
    </FormControl>

    <br />
    <br />
    <Button variant="contained" color="primary" href="/Matches">
      See my matches
      </Button>
      </form>
      <br />
    <br />
      </body>
    </div>
  );
}

export default App;
