import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import headerlogo from './header1.png';
import { Link } from 'react-router-dom';
import {TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel}from '@material-ui/core';
import React from 'react';

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
    fontFamily: 'Optima',
  },
  headimages: {
    width: "700px",
    height: "250px",
  }
}));

function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={headerlogo} className={classes.headimages} alt="Logo: The Book Matcher" />
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
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
    <br />
    <br />
    <FormControl component="fieldset">
      <FormLabel component="legend">What is your gender?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Woman" />
        <FormControlLabel value="male" control={<Radio />} label="Man" />
        <FormControlLabel value="other" control={<Radio />} label="Nonbinary/GNC" />
        <FormControlLabel value="disabled" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </form>
    <br />
    <br />
    <form className={classes.root} noValidate autoComplete="off">
    <FormControl component="fieldset">
      <FormLabel component="legend">What is your race?</FormLabel>
      <RadioGroup aria-label="race" name="race1" value={value} onChange={handleChange}>
        <FormControlLabel value="Black" control={<Radio />} label="Black" />
        <FormControlLabel value="Latinx" control={<Radio />} label="Latinx" />
        <FormControlLabel value="AsianorPacificIslander" control={<Radio />} label="Asian/Pacific Islander" />
        <FormControlLabel value="Indigenous" control={<Radio />} label="Indigenous" />
        <FormControlLabel value="disabled" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </form>
      </body>
    </div>
  );
}

export default App;
