import * as actionTypes from './ActionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (token: string, userId: string) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId,
    };
};

export const authFail = (error: Error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error,
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
        expirationTime,
    };
};

export const auth = (email: string, password: string, isSignUp: boolean) => {
    return {
        type: actionTypes.AUTH_USER,
        email,
        password,
        isSignUp,
    };
};

export const setAuthRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path,
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE,
    };
};
