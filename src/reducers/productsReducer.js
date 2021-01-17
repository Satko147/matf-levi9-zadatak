import {
    PRODUCTS_SET_PRODUCTS,
    PRODUCTS_SET_IS_FETCHING_PRODUCTS,
    PRODUCTS_ADD_PRODUCT, PRODUCTS_DELETE_PRODUCT
} from "../actions/actionTypes";
import Product from "../models/Product";

const initialState = {
    products: [],
    isFetchingProducts: false,
    categories: [
        {name: 'All', id: '0'},
        {name: 'C1', id: '1'},
        {name: 'C2', id: '2'}
    ]
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case PRODUCTS_SET_IS_FETCHING_PRODUCTS:
            return {
                ...state,
                isFetchingProducts: action.payload
            }
        case PRODUCTS_ADD_PRODUCT:
            const newProduct = new Product(
                action.payload.name,
                action.payload.imageUrl,
                action.payload.description,
                action.payload.categoryId,
                action.payload.categoryName,
                action.payload.id,
                action.payload.creationDate
            )
            return {
                ...state,
                products: state.products.concat(newProduct)
            }
        case PRODUCTS_DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default productsReducer;