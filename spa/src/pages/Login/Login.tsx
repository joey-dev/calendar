import React, { Component } from 'react';
import LoginTemplate from '../../atomic/templates/login/LoginTemplate';
import Axios from '../../services/Axios/AxiosConfig';
import { User } from '../../interfaces/User';
import { AnyInputOnChange, FormOnSubmit } from '../../config/formTypes/FormEvents';

class Login extends Component {
    state = {
        loggedIn: false,
        user: {
            email: undefined,
            password: undefined,
        },
    };

    showLoginSuccess = (userDetails: User): void => {
        console.log('login succeeded!');
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        const userDetailsLocalStorage = localStorage.getItem('userDetails');
        if (userDetailsLocalStorage) {
            console.log(JSON.parse(userDetailsLocalStorage));
        } else {
            console.log('[Login] Error with user details');
        }
    };

    showLoginFailed = (): void => {
        console.log('login failed');
    };

    onSubmitHandler = (event: FormOnSubmit) => {
        event.preventDefault();
        const requestData = {
            username: this.state.user.email,
            password: this.state.user.password,
        };
        console.log(requestData);

        Axios.post('login_check/', requestData)
            .then((success: any) => {
                console.log(success);
            })
            .catch((error: any) => {
                console.log(error);
            });

        // if (this.state.user.email === "Jhon@test.test" && this.state.user.password === "test123") {
        //     const userDetails = {
        //         username: "Jhon",
        //         firstName: "Jhon",
        //         lastName: "Smith",
        //         email: this.state.user.email,
        //         password: undefined,
        //         token: 12345
        //     };
        //     this.showLoginSuccess(userDetails);
        // } else {
        //     this.showLoginFailed();
        // }
    };

    onInputChangeHandler = (event: AnyInputOnChange) => {
        let email: string | undefined = this.state.user.email;
        let password: string | undefined = this.state.user.password;

        switch (event.target.name) {
            case 'email':
                email = event.target.value;
                break;
            case 'password':
                password = event.target.value;
                break;
            default:
                return;
        }

        this.setState({ user: { email, password } });
    };

    render() {
        return <LoginTemplate onSubmit={this.onSubmitHandler} onInputChange={this.onInputChangeHandler} />;
    }
}

export default Login;