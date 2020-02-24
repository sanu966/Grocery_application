import React, { Component } from 'react';
import Header from "../header/header";
import Footer from "../footer";
import FormInput from '../shared/FormInput/FormInput';
import Button from '../shared/Button/Button';
import Heading from '../shared/Heading/Heading';
import Anchor from '../shared/Anchor/Anchor';
import "../../styles/common.scss";
import '../../styles/Grid.scss';
import '../../styles/Layout.scss';

const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const validPasswordRegex = RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
   
    this.state = {
      firstName: '',
      lastName:'',
      email: '',
      password: '',
      confirmPassword: '',
      windowWidth: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleChange =(event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
   
    switch (name) {
      case 'firstName': 
        errors.firstName = 
          value && value.length < 5
            ? 'First Name must be 5 characters long!'
            : '';
        break;
        case 'lastName': 
        errors.lastName = 
          value && value.length < 5
            ? 'Last Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email address is not valid!';
        break;
      case 'password': 
        errors.password = 
        value.length < 6 
            ? 'Password must be 6 characters long!' : !validPasswordRegex.test(value) ? 'Must have a number and alphabet' : '' ;
        break;
        case 'confirmPassword': 
        errors.confirmPassword = 
        value.length === 0
            ? '' : !validPasswordRegex.test(value) ? 'Must have a number and alphabet' : '' ;
        break;
        
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleResize = () => this.setState({
    windowWidth: window.innerWidth,
  })

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.state.errors;

    let password = e.target.elements.password.value;
    let confirmPassword = e.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      errors.confirmPassword = 'password and confirm password does not match';

      this.setState({errors, [confirmPassword]: confirmPassword});
    } 

    console.log('Submit button called::::');
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    const { cartProducts } = this.props;
    return (
      <div className='container'>
      <Anchor className="skip-main" to="#main" title="Skip to main content">Skip to main content</Anchor>
      <Header cartProducts={cartProducts}/>
      <main className="section-form" id="main">
      <div className={`form flexContainer flexRowDirection ${ (this.state.windowWidth) > 768 ? '' : 'flexColumnDirection'}`}>
      <div className="shopping-form">
        <Heading variant="h1"> Signup</Heading>
        <p className="order-info">We do not share your personal details with anyone.</p>
      </div>
      <form action="#" onSubmit={this.handleSubmit} noValidate>
                <div className="">
                <FormInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    size={50}
                    onChange={this.handleChange}
                    value={this.state.firstName}
                    className="input"
                    aria-required="true"
                    error={errors.firstName}
                    noValidate
                  />

                <FormInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    size={50}
                    onChange={this.handleChange}
                    value={this.state.lastName}
                    className="input"
                    aria-required="true"
                    error={errors.lastName}
                    noValidate
                />
                
                <FormInput
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    size={50}
                    onChange={this.handleChange}
                    value={this.state.email}
                    className="input"
                    aria-required="true"
                    error={errors.email}
                    noValidate
                />

                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    size={50}
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="input"
                    aria-required="true"
                    error={errors.password}
                    noValidate
                />

                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    size={50}
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
                    className="input"
                    aria-required="true"
                    error={errors.confirmPassword}
                    noValidate
                />
             
             <Button type="submit" value="Submit" className="btn-login">Signup</Button>
           </div>
          </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Register;