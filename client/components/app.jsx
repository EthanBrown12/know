import React from 'react';
// import Welcome from './welcome';
// import Visits from './visits';
// import VisitForm from './visitForm';
import SingleVisit from './singleVisit';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addVisit = this.addVisit.bind(this);
  }

  addVisit(newVisit) {

  }

  render() {
    return (
      // <VisitForm onSubmit={this.addVisit} />
      <SingleVisit />
    );
  }
}
