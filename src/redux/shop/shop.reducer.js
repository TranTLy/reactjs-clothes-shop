import { ShopActionType } from "./shop.type";

const INITAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case ShopActionType.FETCH_COLLECTIONS_START:
            // console.log("on fetch start");
            return {
                ...state,
                isFetching: true
            }
        case ShopActionType.FETCH_COLLECTIONS_SUCCESS:
            // console.log("on fetch success");

            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;