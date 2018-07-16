import React, { Component } from 'react';
import {

  Route,
  Redirect,
} from 'react-router-dom';

export default class Page2 extends Component {
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
          render={() => <Redirect to={{ pathname: '/about', state: { from: 'Print Anurag' } }} />
      } />
      );
    }

    return (

      <div className="App">
        <h1>
        This is Page2 1  Page ....
        </h1>
        <button type="button" onClick={this.fun}>
        2Redirect
        </button>

      </div>
    );
  }
}
