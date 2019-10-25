import React, { useState } from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart({ email, password });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form action="" onSubmit={handleSubmit}>
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
                <div className="sign-in__btn">
                    <CustomButton type="submit">Login</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispathToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: ({ email, password }) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispathToProps)(SignIn);