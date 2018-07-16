import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log('props === ', this.props);
    return (
      <div className="App">
        <h1>
 This is Home Page ....
        </h1>
      </div>
    );
  }
}

export default Home;
