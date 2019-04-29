import React, {Component} from 'react';
// import {addUser} from '../api';
import axios from 'axios';

class ContactUs extends Component {
  constructor(props) {
  super(props);
  this.state = {
    firstName: '',
    lastName: '',
    email: '',
    errors: {}
  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

componentWillReceiveProps(newProps) {
  if(newProps.errors) {
    this.setState({errors: newProps.errors});
  }

}
onSubmit(e) {
  e.preventDefault();
  const newUser = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email
  };


    axios
      .post('/api/users', newUser)
      .then(res =>
        console.log(res)
      )
      .catch(err =>
        console.log(err)
      );

  this.setState({
    firstName: '',
    lastName: '',
    email: ''
  });
}

 onChange(e) {
   this.setState({[e.target.name]: e.target.value});
 }
  render() {
    const { errors } = this.state;

    return (
        <div className="contactus">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center"> Contact US </h1>
                <form onSubmit={this.onSubmit}>
                <br/>
                <input
                  placeholder="* First Name"
                  name="firstName"
                  value={this.state.firstName || ''}
                  onChange={this.onChange}
                  error={errors.firstName}
                  info="firstName"
                />
                <br/>
                <br/>
                <input
                  placeholder="* Last Name"
                  name="lastName"
                  value={this.state.lastName || ''}
                  onChange={this.onChange}
                  error={errors.lastName}
                  info="lastName"
                />
                <br/>
                <br/>
                <input
                  placeholder="* Email"
                  name="email"
                  value={this.state.email || ''}
                  onChange={this.onChange}
                  error={errors.email}
                  info="email"
                />
                <br/>
                <br/>
                <input type="submit" value="Submit" className="btn btn-info  btn-sm"/>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ContactUs;
