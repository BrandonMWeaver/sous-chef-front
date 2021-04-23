import { Component } from "react";

import '../styles/SignInFormBox.css';

class SignInFormBox extends Component {

    render() {
        return (
            <div className="SignInFormBox">
                <div className="box__container">
                    <div className="box">
                        <button>Sign Up</button>
                        <p>Already have an account?</p>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInFormBox;
