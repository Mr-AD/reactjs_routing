import React, { Component } from 'react';


class Page1 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log('page 1');
    return (
      <div className="App">
        <h1>
        This is Page1  Page ....
        </h1>
      </div>
    );
  }
}

export default Page1;
