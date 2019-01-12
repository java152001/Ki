import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Button from 'material-ui/FlatButton';
import API from "../utils/API";




const Dashboard = ({ secretData, user, handleBtnClick}) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.firstName}</strong>!<br />{secretData}</CardText>}
  <Button onClick = {handleBtnClick}>Test</Button>
  </Card>
);



Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
