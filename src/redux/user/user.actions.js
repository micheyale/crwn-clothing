import { userActionTypes } from './user.types';

//user is what will be returned from firebase (authUser)
export const setCurrentUser = (user) => (
    {
        type: userActionTypes.SET_CURRENT_USER,
        payload: user
    }
); 