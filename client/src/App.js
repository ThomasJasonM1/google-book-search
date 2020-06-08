import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Nav';
import BookSearch from './pages/Search';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <Router>
      <div style={{ background: '#d1d1e0' }}>
        <Navbar />
          <Route exact path="/" component={BookSearch} />
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;