import React from 'react';
import './sign-in-sign-up.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


export const SignInAndSignUp = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
)



export default SignInAndSignUp;