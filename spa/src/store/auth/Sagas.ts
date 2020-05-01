import Axios from '../../services/Axios/AxiosConfig';
import { call, delay, put } from 'redux-saga/effects';
import * as actions from './Action';
import { User } from '../../interfaces/User';

type LogoutSageAction = {
    logoutSucceed: () => void;
};

export function* logoutSaga(action: LogoutSageAction) {
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield call([localStorage, 'removeItem'], 'userId');
    yield put(actions.logoutSucceed());
}

type CheckAuthTimeoutSagaAction = {
    logout: () => void;
    payload: CheckAuthTimeoutSagaActionPayload;
};

type CheckAuthTimeoutSagaActionPayload = {
    expirationTime: number;
};

export function* checkAuthTimeoutSaga(action: CheckAuthTimeoutSagaAction) {
    yield delay(action.payload.expirationTime * 1000);
    yield put(actions.logout());
}

type AuthUserSagaAction = {
    payload: AuthUserSagaPayload;
};

type AuthUserSagaPayload = {
    email: string;
    password: string;
    isSignUp: boolean;
};

type LoginResponse = {
    data: LoginResponseData;
};

type LoginResponseData = {
    token: string;
    user: User;
};

export function* authUserSaga(action: AuthUserSagaAction) {
    yield put(actions.authStart());
    const authData = {
        username: action.payload.email,
        password: action.payload.password,
        returnSecureToken: true,
    };
    let url = '/login_check';
    if (action.payload.isSignUp) {
        url = '/register';
    }
    console.log(authData);
    try {
        const response: LoginResponse = yield Axios.post(url, authData);
        console.log(response);
        const expiresIn = 3600;

        const expirationDate = yield new Date(new Date().getTime() + expiresIn * 1000);
        yield localStorage.setItem('token', response.data.token);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.user.userId.toString());
        yield put(actions.authSuccess(response.data.token, response.data.user.userId.toString()));
        yield put(actions.checkAuthTimeout(expiresIn));
    } catch (error) {
        console.error(error);
        yield put(actions.authFail(error.response.data.error));
    }
}

export function* authCheckStateSaga(action: {}) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDateStorage = localStorage.getItem('expirationDate');
        if (!expirationDateStorage) {
            return;
        }
        const expirationDate = yield new Date(expirationDateStorage.toString());
        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }
}
