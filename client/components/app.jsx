import React from 'react';
import Welcome from './welcome';
// import Visits from './visits';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Welcome />
    );
  }
}