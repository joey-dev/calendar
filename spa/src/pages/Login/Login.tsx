import React, { useState } from 'react';
import LoginTemplate from '../../atomic/templates/login/LoginTemplate';
import Axios from '../../services/Axios/AxiosConfig';
import { User } from '../../interfaces/User';
import { AnyInputOnChange, FormOnSubmit } from '../../config/formTypes/FormEvents';

type UseLoginData = {
    email: string | undefined;
    password: string | undefined;
};

const Login: React.FC = () => {
    // const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<UseLoginData>({
        email: undefined,
        password: undefined,
    });

    // const showLoginSuccess = (userDetails: User): void => {
    //     console.log('login succeeded!');
    //     localStorage.setItem('userDetails', JSON.stringify(userDetails));
    //
    //     const userDetailsLocalStorage = localStorage.getItem('userDetails');
    //     if (userDetailsLocalStorage) {
    //         console.log(JSON.parse(userDetailsLocalStorage));
    //     } else {
    //         console.log('[Login] Error with user details');
    //     }
    // };
    //
    // const showLoginFailed = (): void => {
    //     console.log('login failed');
    // };

    const onSubmitHandler = (event: FormOnSubmit) => {
        event.preventDefault();
        const requestData = {
            username: user.email,
            password: user.password,
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

    const onInputChangeHandler = (event: AnyInputOnChange) => {
        let email: string | undefined = user.email;
        let password: string | undefined = user.password;

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

        setUser({ email, password });
    };

    return <LoginTemplate onSubmit={onSubmitHandler} onInputChange={onInputChangeHandler} />;
};

export default Login;
