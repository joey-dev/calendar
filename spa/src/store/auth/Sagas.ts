import Axios from '../../services/Axios/AxiosConfig';
import { call, delay, put } from 'redux-saga/effects';
import * as actions from './Action';

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
    expirationTime: number;
};

export function* checkAuthTimeoutSaga(action: CheckAuthTimeoutSagaAction) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

type AuthUserSagaAction = {
    email: string;
    password: string;
    isSignUp: boolean;
};

type LoginResponse = {
    data: LoginResponseData;
};
type LoginResponseData = {
    token: string;
    userId: string;
    expiresIn: number;
};

export function* authUserSaga(action: AuthUserSagaAction) {
    yield put(actions.authStart());
    const authData = {
        name: action.email,
        password: action.password,
        returnSecureToken: true,
    };
    let url = '/check-login';
    if (action.isSignUp) {
        url = '/register';
    }
    try {
        const response: LoginResponse = yield Axios.post(url, authData);

        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.token);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.userId);
        yield put(actions.authSuccess(response.data.token, response.data.userId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
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
