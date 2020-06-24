
//user is what will be returned from firebase (authUser)
export const setCurrentUser = (user) => (
    {
        type: 'SET_CURRENT_USER',
        payload: user
    }
); 