import React from 'react';
import './App.css';
// import {useSelector, useDispatch} from 'react-redux';
// import {increment, decrement} from './actions';

//components
import Nav from './components/Nav';
import Home from './components/Home';
import ButtonCounter from './components/ButtonCounter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  //dispatch actions when event triggered

  //need a component here ->
  return (
    <Router>
        <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />

              {/*  <Route exact path="/counting" component={ButtonCounter} />*/}
            </Switch>
        </div>
    </Router>
  );
}


export default App;
