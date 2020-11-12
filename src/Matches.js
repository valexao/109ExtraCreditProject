import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import headerlogo from './header1.png';
import { Link } from 'react-router-dom';
//import {Component} from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import AllBooksList from './listofoptions.js'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import book1 from './images/freshwater.jpg'
import book2 from './images/becoming.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
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
  gridFmt: {
      verticalAlign: "middle",
  }
}));

function App() {
  const classes = useStyles();

  const [racevalue, setRaceValue] = React.useState("");

  //handle the click - if yes, add the book to the list, 
  //if no, reject the book
  //then ultimately update the components state
  const handleClick = (event) => { 

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
      <Grid container spacing ={3} className={classes.gridFmt} >
          <Grid item xs>
              <Button>
                  Not for me :/
              </Button>
          </Grid>
        <Grid item xs>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Freshwater book"
            height="600"
            image={book1}
            title="Freshwater Book"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                This is a book
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs>
              <Button>
                  Match me!
              </Button>
          </Grid>
      </Grid>
         </body>
    </div>
  );
}

export default App;
