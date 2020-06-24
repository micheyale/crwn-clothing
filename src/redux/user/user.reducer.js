const INITIAL_STATE = {
    currentUser: null
}

//action object is just a type and a payload
//if there's no state, set default state to INITIAL STATE
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;