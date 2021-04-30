import { Component } from "react";

import SignUpForm from './SignUpForm';

import '../styles/SignInFormBox.css';

class SignInFormBox extends Component {
    state = {
        page: "Primary"
    }

    onSignUpPressed = () => {
        this.setState({
            page: "Sign Up"
        });
    }

    render() {
        if (this.state.page === "Primary") {
            return (
                <div className="SignInFormBox">
                    <div className="box__container">
                        <div className="box">
                            <button onClick={this.onSignUpPressed}>Sign Up</button>
                            <p>Already have an account?</p>
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>
            );
        }
        else if (this.state.page === "Sign Up") {
            return (
                <SignUpForm />
            );
        }
    }
}

export default SignInFormBox;
