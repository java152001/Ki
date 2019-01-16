import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import Jumbotron from '../components/Jumbotron';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {

    return (
      <div>
        <Jumbotron imageurl={'./images/background.jpg'}>
          <div style={{ background: 'white', opacity: '.5', width: '80%', margin: 'auto' }}>
            <CardTitle title="KI" subtitle="Welcome to Ki!" />
            {Auth.isUserAuthenticated() ? (
              <CardText style={{ fontSize: '16px', color: 'green' }}>Head to the Dashboard to check on your device!</CardText>
            ) : (
                <CardText style={{ fontSize: '16px', color: 'green' }}>Looks like you're not logged, in create an account to get started.</CardText>
              )}
          </div>
        </Jumbotron>
        <div style={{width: "95%", margin: "auto"}}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Card style={{height: 175}}>
                <CardTitle style={{textAlign: "center"}} title="What's it for?" />
                <CardText style={{textAlign: "center"}}>
                  Have you ever got a new phone and ran into a problem?
                  Wanted to look into potential issues for a device before making the buy?
                  Ki has you covered!
                </CardText>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{height: 175}}>
                <CardTitle style={{textAlign: "center"}} title="Get Started" />
                <CardText style={{textAlign: "center"}}>
                  Simply create an account with us and let us know what kind of phone you have or want to have looked into.
                  Ki will do the rest for you, looking for any helpful articles pertaining to your phone!
                </CardText>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{height: 175}}>
                <CardTitle style={{textAlign: "center"}} title="You can help too!" />
                <CardText style={{textAlign: "center"}}>
                  Found an especially helpful article? Maybe have an additional comment that could make the article even better?
                  Leave a comment on the article to help your fellow consumer!
                </CardText>
              </Card>
            </Grid>
        </Grid>
        </div>
      </div>
    )
  }


};

export default HomePage;
