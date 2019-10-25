import React, { useState } from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { signupStart } from '../../redux/user/user.actions';

const SignUp = ({ signupStart }) => {
    const [userCredential, setUserCredential] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = userCredential;
    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredential({ ...userCredential, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match');
            document.getElementById("confirm-password").focus();
            return;
        }

        signupStart({ email, password, displayName });
    }

    return (
        <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form action="" onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    label="Display name"
                    type="text"
                    name="displayName"
                    value={displayName}
                />
                <FormInput
                    handleChange={handleChange}
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                />
                <FormInput
                    handleChange={handleChange}
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                />
                <FormInput
                    id="confirm-password"
                    handleChange={handleChange}
                    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signupStart: ({ email, password, displayName }) => dispatch(signupStart({ email, password, displayName }))
})

export default connect(null, mapDispatchToProps)(SignUp);