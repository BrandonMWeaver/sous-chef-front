import React, { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from './SignUpForm';

import '../styles/SignInFormBox.css';

function SignInFormBox() {
    const [page, setPage] = useState("Primary");

    const onSignUpPressed = () => {
        setPage("Sign Up");
    }

    const onSignInPressed = () => {
        setPage("Sign In");
    }

    const onGoBackPressed = () => {
        setPage("Primary");
    }

    return (
        <section>
            <div className="SignInFormBox">
                <div className="box__container">
                    <div className="box" style={{ left: page === "Primary" ? "10px" : "-100%" }}>
                        <button onClick={onSignUpPressed} tabIndex={page === "Primary" ? "0" : "-1"}>Sign Up</button>
                        <p>Already have an account?</p>
                        <button onClick={onSignInPressed} tabIndex={page === "Primary" ? "0" : "-1"}>Sign In</button>
                    </div>
                    <SignUpForm left={page === "Sign Up" ? "10px" : "100%"} displayFocusables={page === "Sign Up"} goBackAction={onGoBackPressed} />
                    <SignInForm left={page === "Sign In" ? "10px" : "100%"} displayFocusables={page === "Sign In"} goBackAction={onGoBackPressed} />
                </div>
            </div>
        </section>
    );
}

export default SignInFormBox;
