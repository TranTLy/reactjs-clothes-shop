import React from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import { createUserInDB, auth } from '../../firebase/firebase.util';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match');
            document.getElementById("confirm-password").focus();
            return;
        }
        try {
            let user = await auth.createUserWithEmailAndPassword(email, password);
            console.log("sign up:", user.user);
            await createUserInDB(user.user, { displayName });
            //clear form
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch (err) {
            alert(err.message);
        }
    }
    render() {
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label="Display name"
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                    />
                    <FormInput
                        id="confirm-password"
                        handleChange={this.handleChange}
                        label="Confirm password"
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;