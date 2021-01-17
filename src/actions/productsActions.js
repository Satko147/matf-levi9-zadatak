import {
    PRODUCTS_SET_IS_FETCHING_PRODUCTS,
    PRODUCTS_SET_PRODUCTS,
    PRODUCTS_ADD_PRODUCT, PRODUCTS_DELETE_PRODUCT
} from "./actionTypes";
import http from '../utils/http';
import Product from "../models/Product";
import { formatDate } from "../utils/utility";

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
                    products[key].name,
                    products[key].imageUrl,
                    products[key].description,
                    products[key].categoryId,
                    products[key].categoryName,
                    formatDate(products[key].creationDate),
                ))
            }
            dispatch({
                type: PRODUCTS_SET_PRODUCTS,
                payload: loadedProducts.sort((a, b) => b.creationDate.localeCompare(a.creationDate))
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

export const addProduct = (name, description, imageUrl, categoryName, categoryId, creationDate) => dispatch => {
    const productData = {
        name: name,
        description: description,
        imageUrl: imageUrl,
        categoryName: categoryName,
        categoryId: categoryId,
        creationDate: creationDate
    }

    return http
        .post('https://levi9-zada-default-rtdb.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: productData
        })
        .then(response => {
            dispatch({
                type: PRODUCTS_ADD_PRODUCT,
                payload: {
                    ...productData,
                    id: response.data.name
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const deleteProduct = productId => dispatch => {
    return http
        .delete(`https://levi9-zada-default-rtdb.firebaseio.com/products/${productId}.json`, {
            method: 'DELETE'
        })
        .then(() => {
            dispatch({
                type: PRODUCTS_DELETE_PRODUCT,
                payload: productId
            })
        });
}

export { fetchProducts }