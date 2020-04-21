import React, { Component } from 'react';
import CardList from './Card';
import Form from './Form';
import '../css/styles.scss'

class Home extends Component {

  state = {
    profiles: [],
  }

  getProfileData = (profileData) => {

    this.setState(prevState => this.setState({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render() {

    return (
      <div className="body">
        <div className="app-view">
          <div className="header">
            <h1>
              GitHub Card Reader App
            </h1>
          </div>

          <Form onClick={this.getProfileData} />

          <CardList profiles={this.state.profiles} />
        </div>
      </div>
    );
  }
}

export default Home;
