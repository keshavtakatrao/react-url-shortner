import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './home';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SignIn from './signin'
import SignUp from './siginup';



function App() {

  let history = useHistory();

  return (
    <>
      <Router>
        <Switch>
          <Route path='/home' exact={true} component={Home} />
          <Route path='/' exact='true' component={SignIn} />
          <Route path='/sign-up' exact='true' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
