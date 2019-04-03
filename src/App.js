import React, { Component, Fragment } from 'react';

// import Form from "./components/Form/Form"
import Listings from './components/Listings/Listings';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Listings />
      </Fragment>
    );
  }
}

export default App;
