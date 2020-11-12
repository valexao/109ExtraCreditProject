import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HowItWorks from './HowItWorks.js';
import MyBooks from './MyBooks.js';
import Matching from './Matching.js';
import Matches from './Matches.js';

ReactDOM.render((
  <BrowserRouter>
      <main>
          <Switch>
              <Route path="/" component={App} exact />
              <Route path="/HowItWorks" component={HowItWorks} />
              <Route path="/MyBookMatches" component={MyBooks} />
              <Route path="/Matching" component={Matching} />
              <Route path="/Matches" component={Matches} />
          </Switch>
      </main>
  </BrowserRouter> 
), document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
