import React, { Component } from 'react';

class Login extends Component {
    state = {
        loggedIn: false,
        user: {
            username: undefined,
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            token: undefined,
        },
    };

    render() {
        return (
            <LoginTemplate />
        );
    }
}

export default Login;
