import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import Jumbotron from '../components/Jumbotron'

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Jumbotron >
        <CardTitle title="React Application" subtitle="This is the home page." />
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
          ) : (
            <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
          )}
      </Jumbotron>
    )
  }
};

export default HomePage;
