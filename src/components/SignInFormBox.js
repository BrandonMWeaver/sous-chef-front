import React, { useEffect, useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from './SignUpForm';

import '../styles/SignInFormBox.css';

function SignInFormBox(props) {
    const [page, setPage] = useState("Primary");

    const [currentUser, setCurrentUser] = useState(props.currentUser);
    useEffect(() => {
        setCurrentUser(props.currentUser)
    }, [props.currentUser]);

    const onSignUpPressed = () => {
        setPage("Sign Up");
    }

    const onSignInPressed = () => {
        setPage("Sign In");
    }

    const onGoBackPressed = () => {
        setPage("Primary");
    }

    const onSignOutPressed = () => {
        fetch("http://localhost:3000/sessions-destroy", {
            credentials: "include"
        })
        .then(r => r.json())
        .then(o => {
            console.log(o);
            props.signOutCurrentUser(o);
        });

        setPage("Primary");
    }

    const revolveSignInBox = () => {
        setTimeout(() => {
            const box = document.querySelectorAll(".box__container .box")[1];
            box.style.opacity = 0;
            box.style.left = "100%";

            setTimeout(() => {
                box.style.opacity = 1;
            }, 500);
        }, 500);
    }

    return (
        <section>
            <div className="SignInFormBox">
                <div className="box__container">
                    <div className="box" style={{ left: currentUser ? "10px" : "-100%" }}>
                        <button onClick={onSignOutPressed}>Sign Out</button>
                    </div>
                    <div className="box" style={{ left: page === "Primary" && !currentUser ? "10px" : "-100%" }}>
                        <button onClick={onSignUpPressed} tabIndex={page === "Primary" && !currentUser ? "0" : "-1"}>Sign Up</button>
                        <p>Already have an account?</p>
                        <button onClick={onSignInPressed} tabIndex={page === "Primary" && !currentUser ? "0" : "-1"}>Sign In</button>
                    </div>
                    <SignUpForm left={page === "Sign Up" ? "10px" : "100%"} displayFocusables={page === "Sign Up"}
                    signInCurrentUser={props.signInCurrentUser}
                    goBackAction={onGoBackPressed}
                    revolveSignInBox={revolveSignInBox} />
                    <SignInForm left={page === "Sign In" ? "10px" : "100%"} displayFocusables={page === "Sign In"}
                    signInCurrentUser={props.signInCurrentUser}
                    goBackAction={onGoBackPressed}
                    revolveSignInBox={revolveSignInBox} />
                </div>
            </div>
        </section>
    );
}

export default SignInFormBox;
