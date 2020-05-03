import { UserStoreState } from '../auth/Index';
import * as ActionTypes from './ActionTypes';
import UpdateObject from '../../services/reducer/UpdateObject/UpdateObject';
import { User } from '../../interfaces/User';

const initialState: UserStoreState = {
    user: undefined,
};

export type Actions = {
    type: string;
    payload: Payload;
};

type Payload = {
    user?: User;
};

const userReducer = (state: UserStoreState = initialState, { type, payload }: Actions) => {
    switch (type) {
        case ActionTypes.UPDATE_USER_STATE:
            return UpdateObject(state, { user: payload.user });
        default:
            return state;
    }
};

export default userReducer;
