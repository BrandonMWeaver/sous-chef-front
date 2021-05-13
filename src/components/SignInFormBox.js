import React, { useState } from "react";

import SignUpForm from './SignUpForm';

import '../styles/SignInFormBox.css';

function SignInFormBox() {
    const [page, setPage] = useState("Primary");

    const onSignUpPressed = () => {
        setPage("Sign Up");
    }

    const onGoBackPressed = () => {
        setPage("Primary");
    }

    return (
        <section>
            <div className="SignInFormBox">
                <div className="box__container">
                    <div className="box">
                        <button onClick={onSignUpPressed}>Sign Up</button>
                        <p>Already have an account?</p>
                        <button>Sign In</button>
                    </div>
                    <SignUpForm left={page === "Sign Up" ? 0 : "100%"} opacity={page === "Sign Up" ? 1: 0} goBackAction={onGoBackPressed} />
                </div>
            </div>
        </section>
    );
}

export default SignInFormBox;
