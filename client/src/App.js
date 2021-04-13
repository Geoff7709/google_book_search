import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './pages/search'
import Saved from './pages/saved'
import Navbar from './components/navbar'
import Container from './components/container'
import Row from './components/row'

function App() {
  return (
    <Container>
      <Row>
        <header>
          <h1>Google Book Search</h1>
        </header>
      </Row>
      <Row>
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
      </Row>
    </Container>
  );
}

export default App;
