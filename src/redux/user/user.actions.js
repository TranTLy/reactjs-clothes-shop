import { userTypeAction } from "./user.type";


export const setUserAction = user => ({
    type: userTypeAction.setUser,
    payload: user
});