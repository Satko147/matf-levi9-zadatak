import {PRODUCTS_SET_IS_FETCHING_PRODUCTS, PRODUCTS_SET_PRODUCTS} from "./actionTypes";
import http from '../utils/http';
import Product from "../models/Product";

const fetchProducts = () => dispatch => {
    dispatch({
        type: PRODUCTS_SET_IS_FETCHING_PRODUCTS,
        payload: true
    })

    return http
        .get('https://levi9-zada-default-rtdb.firebaseio.com/products.json')
        .then(response => {
            const products = response.data !== undefined ? response.data : []
            const loadedProducts = []
            for (const key in products) {
                loadedProducts.push(new Product(
                    key,
                    products[key].productName
                ))
            }
            dispatch({
                type: PRODUCTS_SET_PRODUCTS,
                payload: loadedProducts
            })
            dispatch({
                type: PRODUCTS_SET_IS_FETCHING_PRODUCTS,
                payload: false
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: PRODUCTS_SET_IS_FETCHING_PRODUCTS,
                payload: false,
            })
        })
}

export { fetchProducts }