import React, { Component } from 'react';
import LoginTemplate from '../../atomic/templates/login/LoginTemplate';

class Login extends Component {
    state = {
        loggedIn: false,
        user: {
            email: undefined,
            password: undefined,
        },
    };

    showLoginSuccess = (userDetails) => {
        console.log("login succeeded!");
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        console.log(JSON.parse(localStorage.getItem('userDetails')));
    }

    showLoginFailed = () => {
        console.log("login failed");
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        if (this.state.user.email === "Jhon@test.test" && this.state.user.password === "test123") {
            const userDetails = {
                username: "Jhon",
                firstName: "Jhon",
                lastName: "Smith",
                email: this.state.user.email,
                password: undefined,
                token: 12345
            };
            this.showLoginSuccess(userDetails);
        } else {
            this.showLoginFailed();
        }
    }

    onInputChangeHandler = (event) => {
        let email = this.state.user.email;
        let password = this.state.user.password;

        switch (event.target.name) {
            case 'email':
                email = event.target.value;
                break;
            case 'password':
                password = event.target.value;
                break;
        }

        this.setState({user: {email, password}})
    }

    render() {
        return (
            <LoginTemplate
                onSubmit={this.onSubmitHandler}
                onInputChange={this.onInputChangeHandler}
            />
        );
    }
}

export default Login;
