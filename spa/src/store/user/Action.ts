import * as actionTypes from './ActionTypes';
import { User } from '../../interfaces/User';

export const updateUserState = (user: User) => {
    return {
        type: actionTypes.UPDATE_USER_STATE,
        payload: {
            user,
        },
    };
};
