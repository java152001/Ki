import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  handleChange
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

      <div className="field-line">
        <form>
          <label>
            Phone
            <br />
            <select name="phone" value={user.phone}
            onChange={onChange}>
              <option value="iphone8">iPhone 8</option>
              <option value="iphone8p">iPhone 8P</option>
              <option value="iphonex">iPhone X</option>
              <option value="iphonexr">iPhone XR</option>
              <option value="iphonexs">iPhone XS</option>
            </select>
          </label>
        </form>
      
      </div>

      {/* <div className="field-line">
        <TextField
          floatingLabelText="Phone"
          type="text"
          name="phone"
          onChange={onChange}
          errorText={errors.phone}
          value={user.phone}
        />
      </div> */}

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
