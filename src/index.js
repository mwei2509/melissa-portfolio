import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Scroll from './playground/scroll'
import './index.css';
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/mood" component={Scroll}/>
        <Route path="/" component={App}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
