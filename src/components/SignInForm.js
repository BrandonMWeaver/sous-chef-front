import React, { useState } from 'react';

import '../styles/UserForm.css';

function SignInForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        if (e.target.name === "username")
            setUsername(e.target.value);
        else
            setPassword(e.target.value);
    }

    const onSignUpPressed = () => {
        fetch("http://localhost:3000/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ username, password })
        })
        .then(r => r.json())
        .then(o => {
            console.log(o);
            if (o !== null) {
                props.signInCurrentUser(o);
                props.goBackAction();
                props.revolveSignInBox();
            }
        });

        setUsername('');
        setPassword('');
    }

    return (
        <div className="UserForm" style={{ left: props.left }}>
            <div className="form">
                <input name="username" tabIndex={props.displayFocusables ? "0" : "-1"} onChange={handleChange} value={username}
                placeholder="username" />
                <input name="password" tabIndex={props.displayFocusables ? "0" : "-1"} onChange={handleChange} type="password" value={password}
                placeholder="password" />
                <div className="button__box">
                    <button tabIndex={props.displayFocusables ? "0" : "-1"} onClick={onSignUpPressed}>Sign In</button>
                    <button tabIndex={props.displayFocusables ? "0" : "-1"} onClick={props.goBackAction}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
