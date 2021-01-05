import { PRODUCTS_SET_PRODUCTS, PRODUCTS_SET_IS_FETCHING_PRODUCTS } from "../actions/actionTypes";

const initialState = {
    products: [],
    isFetchingProducts: false,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_SET_PRODUCTS:
            console.log(action.payload)
            return {
                ...state,
                products: action.payload
            }
        case PRODUCTS_SET_IS_FETCHING_PRODUCTS:
            return {
                ...state,
                isFetchingProducts: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;