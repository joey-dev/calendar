import * as actionTypes from './ActionTypes';
import UpdateObject from '../../services/reducer/UpdateObject/UpdateObject';
import { AuthStoreState } from './Index';

const initialState: AuthStoreState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
};

type AuthSuccessActions = {
    token?: string;
    userId?: string;
};

const authSuccess = (state: AuthStoreState, action: AuthSuccessActions) => {
    console.log(state);
    console.log(action);
    return UpdateObject(state, {
        token: action.token,
        userId: action.token,
        error: null,
        loading: false,
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
    userId?: string;
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
