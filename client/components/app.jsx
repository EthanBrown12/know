import React from 'react';
import Welcome from './welcome';
import Login from './login';
import Visits from './visits';
import Partners from './partners';
import VisitForm from './visitForm';
import SingleVisit from './singleVisit';
import Settings from './settings';
import PartnerForm from './partnerForm';
import GetTested from './getTested';
import Signup from './signup';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.addVisit = this.addVisit.bind(this);
    this.selectVisit = this.selectVisit.bind(this);
    this.addModalToggle = this.addModalToggle.bind(this);
    this.state = {
      view: 'welcome',
      visitId: null,
      addModal: false
    };
  }

  addModalToggle() {
    this.setState({ addModal: !this.state.addModal });
  }

  setView(name) {
    this.setState({ view: name });
  }

  selectVisit(visitId) {
    this.setState({ visitId: visitId });
    this.setState({ view: 'singleVisit' });
  }

  addVisit(newVisit) {
    fetch('/api/visits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newVisit)
    })
      .then(() => this.setState({ view: 'visits' }));

  }

  render() {

    if (this.state.view === 'welcome') {
      return (
        <Welcome setView={this.setView} />
      );
    } else if (this.state.view === 'signup') {
      return (
        <Signup setView={this.setView} />
      );
    } else if (this.state.view === 'login') {
      return (
        <Login setView={this.setView} />
      );
    } else if (this.state.view === 'visits') {
      return (
        <Visits addModal={this.state.addModal} addModalToggle={this.addModalToggle} selectVisit={this.selectVisit} setView={this.setView} />
      );
    } else if (this.state.view === 'singleVisit') {
      return (
        <SingleVisit addModal={this.state.addModal} addModalToggle={this.addModalToggle} visitId={this.state.visitId} setView={this.setView} />
      );
    } else if (this.state.view === 'settings') {
      return (
        <Settings addModal={this.state.addModal} addModalToggle={this.addModalToggle} setView={this.setView} />
      );
    } else if (this.state.view === 'partners') {
      return (
        <Partners addModal={this.state.addModal} addModalToggle={this.addModalToggle} setView={this.setView} />
      );
    } else if (this.state.view === 'visitForm') {
      return (
        <VisitForm onSubmit={this.addVisit} setView={this.setView} />
      );
    } else if (this.state.view === 'partnerForm') {
      return (
        <PartnerForm setView={this.setView} />
      );
    } else if (this.state.view === 'getTested') {
      return (
        <GetTested setView={this.setView} />
      );
    }
  }
}
