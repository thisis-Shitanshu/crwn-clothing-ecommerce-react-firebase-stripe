import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event => {
        const { name, value } = event.target;
        console.log(name);
        
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form 
                    onSubmit={this.handleSubmit}
                >
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        value={email}
                        label="email"
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password"
                        handleChange={this.handleChange}
                        value={password}
                        label="password"
                        required
                    />

                    <CustomButton 
                        type="submit" 
                    >
                        Sign in
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;