import { userTypeAction } from "./user.type";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypeAction.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case userTypeAction.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userTypeAction.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userTypeAction.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userTypeAction.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        // case userTypeAction.SIGN_UP_SUCCESS:
        //     return {
        //         ...state,
        //         currentUser: action.payload.user
        //     }
        default:
            return state;
    }
};

export default userReducer;