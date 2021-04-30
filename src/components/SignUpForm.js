import { Component } from 'react';

import '../styles/SignUpForm.css';

class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSignUpPressed = () => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(o => console.log(o));

        this.setState({
            username: '',
            password: '',
            password_confirmation: ''
        });
    }

    render() {
        return (
            <div className="SignUpForm">
                <div className="box">
                    <p>Username</p>
                    <input name="username" onChange={this.handleChange} value={this.state.username} />
                    <p>Password</p>
                    <input name="password" onChange={this.handleChange} type="password" value={this.state.password} />
                    <p>Confirm Password</p>
                    <input name="password_confirmation" onChange={this.handleChange} type="password" value={this.state.password_confirmation} />
                    <button onClick={this.onSignUpPressed}>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default SignUpForm;
