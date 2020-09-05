import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ExerciseList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import PageNotFound from './components/page-not-found.component';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <br />
        <Switch>
          <Route path = "/" exact component={ExerciseList} />
          <Route path = "/edit/:id" component={EditExercise} />
          <Route path = "/create" component={CreateExercise} />
          <Route path = "/user" component={CreateUser} />
          <Route  component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

