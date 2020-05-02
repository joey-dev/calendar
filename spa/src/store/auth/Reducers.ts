import * as actionTypes from './ActionTypes';
import UpdateObject from '../../services/reducer/UpdateObject/UpdateObject';
import { AuthStoreState } from './Index';
import { User } from '../../interfaces/User';

const initialState: AuthStoreState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
};

type AuthSuccessActions = {
    token?: string;
    user?: User
};

const authSuccess = (state: AuthStoreState, action: AuthSuccessActions) => {
    return UpdateObject(state, {
        token: action.token,
        userId: action.user ? action.user.userId : null,
        user: action.user,
        error: null,
        loading: false
    });
};

const authLogout = (state: AuthStoreState) => {
    return UpdateObject(state, {
        token: null,
        userId: null,
    });
};

type AuthReducerActions = {
    type: string;
    payload: Payload;
};

type Payload = {
    error?: string | null;
    path?: string;
    token?: string;
    user?: User;
};

const authReducer = (state: AuthStoreState = initialState, { type, payload }: AuthReducerActions) => {
    switch (type) {
        case actionTypes.AUTH_START:
            return UpdateObject(state, { error: null, loading: true });
        case actionTypes.AUTH_FAIL:
            return UpdateObject(state, { error: payload.error, loading: false });
        case actionTypes.AUTH_SUCCESS:
            console.log(payload);
            return authSuccess(state, payload);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return UpdateObject(state, { authRedirectPath: payload.path });
        default:
            return state;
    }
};

export default authReducer;
