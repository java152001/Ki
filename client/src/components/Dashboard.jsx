import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Button from 'material-ui/FlatButton';
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";




const Dashboard = ({ secretData, user, handleBtnClick, imageurl}) => (
  <div>
  <Jumbotron imageurl={imageurl}>
    <CardTitle
      title="Dashboard"
    />
  <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.firstName}</strong>! You have articles to review!<br /></CardText>

  <Button onClick = {handleBtnClick}>Show Articles!</Button>
  </Jumbotron>
  </div>
);



Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
