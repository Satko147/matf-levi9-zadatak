import React from 'react';
import { Redirect } from 'react-router-dom';

import {
    ProductPage,
    HomePage,
    CheckoutPage,
    AuthPage,
    CartPage,
    AddProductPage
} from '../pages';


const routes = {
    all: [{
        path: '/login',
        exact: true,
        isPublic: true,
        component: AuthPage
    }, {
        path: '/cart',
        exact: true,
        isPublic: true,
        component: CartPage
    }, {
        path: '/checkout',
        exact: true,
        isPublic: true,
        component: CheckoutPage
    }, {
        path: '/admin/proizvodi',
        exact: true,
        isPublic: true,
        component: HomePage
    }, {
        path: '/products/:productId',
        exact: true,
        isPublic: true,
        component: ProductPage
    }, {
        path: '/admin/unos-novog-proizvoda',
        exact: true,
        isPublic: true,
        component: AddProductPage
    }, {
        path: '/*',
        isPublic: true,
        component: () => <Redirect to={{ pathname: '/login' }} />,
    }]
}

export { routes }