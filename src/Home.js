import React, { Component } from 'react';
import AnimatedWrapper from './AnimatedWrapper';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Home page!</p>
      </div>
    )
  };
}

const Home = AnimatedWrapper(HomeComponent);
export default Home;
