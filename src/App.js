import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListfilmComponent from './components/ListfilmComponent';
import CreatefilmComponent from './components/CreatefilmComponent';
import UpdatefilmComponent from './components/UpdatefilmComponent';
import ViewfilmComponent from './components/ViewfilmComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListfilmComponent}></Route>
                          <Route path = "/films" component = {ListfilmComponent}></Route>
                          <Route path = "/add-film/:id" component = {CreatefilmComponent}></Route>
                          <Route path = "/view-film/:id" component = {ViewfilmComponent}></Route>
                          {/* <Route path = "/update-film/:id" component = {UpdatefilmComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
