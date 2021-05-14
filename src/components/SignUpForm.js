import React, { useState } from 'react';

import '../styles/SignUpForm.css';

function SignUpForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const handleChange = e => {
        if (e.target.name === "username")
            setUsername(e.target.value);
        else if (e.target.name === "password")
            setPassword(e.target.value);
        else
            setPasswordConfirmation(e.target.value);
    }

    const onSignUpPressed = () => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ username, password, password_confirmation })
        })
        .then(r => r.json())
        .then(o => console.log(o));

        setUsername('');
        setPassword('');
        setPasswordConfirmation('');
    }

    return (
        <div className="SignUpForm" style={{ left: props.left }}>
            <div className="form">
                <input name="username" tabIndex={props.displayFocusables ? "0" : "-1"} onChange={handleChange} value={username}
                placeholder="username" />
                <input name="password" tabIndex={props.displayFocusables ? "0" : "-1"} onChange={handleChange} type="password" value={password}
                placeholder="password" />
                <input name="password_confirmation" tabIndex={props.displayFocusables ? "0" : "-1"} onChange={handleChange} type="password" value={password_confirmation}
                placeholder="password confirmation" />
                <div className="button__box">
                    <button tabIndex={props.displayFocusables ? "0" : "-1"} onClick={onSignUpPressed}>Sign Up</button>
                    <button tabIndex={props.displayFocusables ? "0" : "-1"} onClick={props.goBackAction}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
