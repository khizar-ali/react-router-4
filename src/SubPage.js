import React, { Component } from 'react';
import AnimatedWrapper from './AnimatedWrapper';

class SubPageComponent extends Component {
  render() {
    return (
      <div>
        <h1>Sub Page</h1>
        <p>sub page !</p>
      </div>
    )
  }
}

const SubPage = AnimatedWrapper(SubPageComponent)

export default SubPage;
