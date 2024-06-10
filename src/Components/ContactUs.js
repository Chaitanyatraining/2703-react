import React, { Component } from 'react'

class ContactUs extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firstNameErr: '',
    lastNameErr: '',
    emailErr: '',
    phoneErr: ''
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.validateForm()
  }

  // firstName > 4
  // lastName > 1
  // phone contain 10 digits
  // email '@'

  validateForm = () => {
    let firstNameErr = '';
    let lastNameErr = '';
    let phoneErr = '';
    let emailErr = '';

    if (this.state.firstName.length <= 4) {
      firstNameErr = "first Name should be atleast 4 characters"
    }

    if (this.state.lastName.length <= 1) {
      lastNameErr = 'last Name should have atleast 1 char'
    }

    if (this.state.phone.length !== 10) {
      phoneErr = 'Enter a valid phone number'
    }

    if (!this.state.email.includes('@')) {
      emailErr = 'Enter a valid Email'
    }

    if (firstNameErr || lastNameErr || phoneErr || emailErr) {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
    } else {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
    }

  }

  render() {
    return (
      <>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <h2>ContactUs</h2>
            <form>
              <div>
                <input type="text"
                  className='form-control'
                  placeholder='Enter the firstName'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  name="firstName"
                />
                <p className='text-danger'>{this.state.firstNameErr}</p>
              </div>
              <div className='mt-2'>
                <input type="text"
                  className='form-control'
                  placeholder='Enter the lastName'
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  name="lastName"
                />
                <p className='text-danger'>{this.state.lastNameErr}</p>
              </div>
              <div className='mt-2'>
                <input type="text"
                  className='form-control'
                  placeholder='Enter the phone'
                  value={this.state.phone}
                  onChange={this.handleChange}
                  name="phone"
                />
                <p className='text-danger'>{this.state.phoneErr}</p>
              </div>
              <div className='mt-2'>
                <input type="text"
                  className='form-control'
                  placeholder='Enter the email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                />
                <p className='text-danger'>{this.state.emailErr}</p>
              </div>
              <div>
                <button className='mt-3 btn btn-primary'
                  onClick={this.handleSubmit}
                >Submit</button>
              </div>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
      </>
    )
  }
}

export default ContactUs