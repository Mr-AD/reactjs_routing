import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  fun = () => {
    const { value } = this.state;
    this.setState(prevState => ({ value: !prevState.value }));
    console.log('About Page1 === ', value);
  }


  render() {
    const { value } = this.state;

    if (value) {
      console.log('inside', value);
      return (
        <Route
          render={() => <Redirect to={{ pathname: '/page2', state: { from: 'Print Anurag' } }} />
      } />
      );
    }
    console.log('About Page === ', value);

    return (
      <Router>
        <div className="App">
          <h1>
         This is About Page ....
          </h1>
          <button type="button" onClick={this.fun}>
           2Redirect
          </button>

        </div>
      </Router>
    );
  }
}

export default About;
