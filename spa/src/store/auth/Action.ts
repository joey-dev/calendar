import * as actionTypes from './ActionTypes';
import { User } from '../../interfaces/User';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (user: User, token?: string) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token,
            user,
        },
    };
};

export const authFail = (error: Error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: {
            error,
        },
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT,
    };
};

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime: number) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        payload: {
            expirationTime,
        },
    };
};

export const auth = (email: string, password: string, isSignUp: boolean) => {
    return {
        type: actionTypes.AUTH_USER,
        payload: {
            email,
            password,
            isSignUp,
        },
    };
};

export const setAuthRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        payload: {
            path,
        },
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE,
    };
};
