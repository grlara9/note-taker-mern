import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AllNotes from './pages/all-notes';
import AddNote from './pages/add-note';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={AllNotes} />
        <Route path="/addnotes" component={AddNote} />
      </Switch>
    </div>
    </Router>
     
  );
}

export default App;
