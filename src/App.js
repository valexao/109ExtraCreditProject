import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import headerlogo from './headerlogo.png';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  headimages: {
    width: "700px",
    height: "250px",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
      <img src={headerlogo} className={classes.headimages} alt="Logo: The Book Matcher" />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Link to="/HowItWorks">
          How it Works
          </Link></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Link to='/MyBookMatches'> My Books
          </Link></Paper>
        </Grid>
      </Grid>
      </header>

      <body className="App-body">
      <Grid justify="center" container spacing={3}>
        <Grid item xs={9}>
      <Paper className={classes.paper}>
      <Link to='/Matching'> Start Matching!
          </Link>
          </Paper>
        </Grid>
      </Grid>
      </body>
    </div>
  );
}

export default App;
