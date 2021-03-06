import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AllNotes from './pages/AllNotes';
import AddNote from './pages/AddNotes';
import EditNote from './pages/edit-note'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import Header from './components/header.component';
import Navigation from './shared/components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
      <Switch>
        <Route exact path="/" component={AllNotes} />
        <Route path="/add" component={AddNote} />
        <Route path="/edit/:id" component={EditNote} />
      </Switch>
      </main>
    </div>
    </Router>
     
  );
}

export default App;
