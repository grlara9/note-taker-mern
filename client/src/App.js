import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AllNotes from './pages/all-notes';
import AddNote from './pages/add-note';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/header.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
        <Route exact path="/" component={AllNotes} />
        <Route path="/add" component={AddNote} />
      </Switch>
    </div>
    </Router>
     
  );
}

export default App;
