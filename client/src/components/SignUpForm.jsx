import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user
  // handleOpen,
  // handleClose,
  // open
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="First Name"
          name="firstName"
          errorText={errors.firstName}
          onChange={onChange}
          value={user.firstName}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Last Name"
          name="lastName"
          errorText={errors.lastName}
          onChange={onChange}
          value={user.lastName}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      {/* <div className = "field-line">

        <Select
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={user.phone}
        onChange={onChange}
        >
          <MenuItem value=""> </MenuItem>
          <MenuItem value="iphone6">iPhone 6</MenuItem>
          <MenuItem value="iphone6s">iPhone 6s</MenuItem>
          <MenuItem value="iphone7">iPhone 7</MenuItem>
          <MenuItem value="iphone7p">iPhone 7P</MenuItem>
          <MenuItem value="iphone8">iPhone 8</MenuItem>
          <MenuItem value="iphone8p">iPhone 8P</MenuItem>
          <MenuItem value="iphonex">iPhone X</MenuItem>
          <MenuItem value="iphonexr">iPhone XR</MenuItem>
          <MenuItem value="iphonexs">iPhone XS</MenuItem>
        </Select>
      </div> */}

      <div className="field-line">
        <TextField
          floatingLabelText="Phone"
          type="text"
          name="phone"
          onChange={onChange}
          errorText={errors.phone}
          value={user.phone}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
