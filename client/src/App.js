import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './pages/search'
import Saved from './pages/saved'
import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
