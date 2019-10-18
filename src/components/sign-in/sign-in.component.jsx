import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.error(err);
        }
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
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
                    <div className="sign-in__btn">
                        <CustomButton type="submit">Login</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;