
import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import About1 from './About1';
import Page1 from './Page1';
import Page2 from './Page2';


// eslint-disable-next-line prefer-stateless-function
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <h1>
          This is Routing Test ....
        </h1>

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">
                Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                About
                </Link>
              </li>
              <li>
                <Link to="/about1">
                About1
                </Link>
              </li>
              <li>
                <Link to="/page1">
                Page1
                </Link>
              </li>
              <li>
                <Link to="/page2">
                Page2
                </Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about1" component={About1} />
            <Route exact path="/page1" component={Page1} />
            <Route exact path="/page2" component={Page2} />
          </div>
        </Router>
      </div>
    );
  }
}
