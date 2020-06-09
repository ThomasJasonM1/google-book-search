import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Nav';
import BookSearch from './pages/Search';
import SavedBooks from './pages/Saved';

const App = () => {
  return (
    <Router>
      <div style={{ background: '#d1d1e0' }}>
        <Navbar />
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/search" component={BookSearch} />
          <Route exact path="/saved" component={SavedBooks} />
      </div>
    </Router>
  );
}

export default App;