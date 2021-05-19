import React, { useEffect, useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from './SignUpForm';

import '../styles/SignInFormBox.css';

function SignInFormBox(props) {
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

    const onSignOutPressed = () => {
        props.setCurrentUserLoaded(false);

        fetch("http://localhost:3000/sessions-destroy", {
            credentials: "include"
        })
        .then(r => r.json())
        .then(o => {
            console.log(o);
            props.signOutCurrentUser(o);
            props.setCurrentUserLoaded(true);
        })
        .catch(e => {
            console.log(e.message);
            props.setCurrentUserLoaded(true);
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

    useEffect(() => {
        const determinePrimaryPagePosition = () => {
            if (props.currentUser)
                revolveSignInBox();
        }
        determinePrimaryPagePosition();
    }, [props.currentUser]);

    return (
        <section>
            <div className="SignInFormBox">
                <div className="box__container">
                    <div className="box" style={{ left: props.currentUser ? "10px" : "-100%" }}>
                        <button onClick={onSignOutPressed}>Sign Out</button>
                    </div>
                    <div className="box" style={{ left: page === "Primary" && !props.currentUser ? "10px" : "-100%" }}>
                        <button onClick={onSignUpPressed} tabIndex={page === "Primary" && !props.currentUser ? "0" : "-1"}>Sign Up</button>
                        <p>Already have an account?</p>
                        <button onClick={onSignInPressed} tabIndex={page === "Primary" && !props.currentUser ? "0" : "-1"}>Sign In</button>
                    </div>
                    <SignUpForm left={page === "Sign Up" ? "10px" : "100%"} displayFocusables={page === "Sign Up"}
                    signInCurrentUser={props.signInCurrentUser}
                    setCurrentUserLoaded={props.setCurrentUserLoaded}
                    goBackAction={onGoBackPressed} />
                    <SignInForm left={page === "Sign In" ? "10px" : "100%"} displayFocusables={page === "Sign In"}
                    signInCurrentUser={props.signInCurrentUser}
                    setCurrentUserLoaded={props.setCurrentUserLoaded}
                    goBackAction={onGoBackPressed} />
                </div>
            </div>
        </section>
    );
}

export default SignInFormBox;
