import React from 'react';
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/signin/SignIn';
import './SigninSignupPage.scss'


const SigninSignupPage = () => {
    console.log("sing")
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SigninSignupPage;