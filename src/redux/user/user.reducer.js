import { userTypeAction } from "./user.type";

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypeAction.setUser:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;