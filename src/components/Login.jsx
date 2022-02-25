import React, { createRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../slices/userSlice'
import './Login.sass'
import { withNavigation } from "./withNavigation.jsx";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            error: null
        };
        
        this.inputRef = createRef();
    }

    register = () => {
        fetch(`https://api.spacetraders.io/users/${this.inputRef.current.value}/claim`, {method: 'POST'}).then (res => res.json()).then(res => {
            if (res.error) {
                console.error(res.error);
                this.setState({error: res.error.message})
            } else {
                this.props.login(res.token);
                this.props.navigate('/');
            }
        })
    }

    login = () => {
        fetch(`https://api.spacetraders.io/my/account?token=${this.inputRef.current.value}`).then (res => res.json()).then(res => {
            if (res.error) {
                console.error(res.error);
                this.setState({error: res.error.message})
            } else {
                this.props.login(this.inputRef.current.value);
                this.props.navigate('/');
            }
        })
    }

    render() {

        if (this.state.register) {
            return (
                <div className="Login">
                    <h1>Register</h1>
                    <p>
                        <label>
                            Username:
                            <input type="text" ref={this.inputRef}/>
                        </label>
                    </p>
                    { this.state.error && <span className="error">{this.state.error}</span> } 
                    <button onClick={this.register}>Register</button>
                    <a onClick={() => {this.setState({register: false})}}>Login?</a>
                </div>
            );
        } else {
            return (
                <div className="Login">
                    <h1>Login</h1>
                    <p>
                        <label>
                            Token:
                            <input type="text" ref={this.inputRef}/>
                        </label>
                    </p>
                    { this.state.error && <span className="error">{this.state.error}</span> } 
                    <button onClick={this.login}>Login</button>
                    <a onClick={() => {this.setState({register: true})}}>Register?</a>
                </div>
            );
        }

        
    }
}

export default withNavigation(connect(() => ({}), { login })(Login));