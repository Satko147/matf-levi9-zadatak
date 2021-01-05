import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from "connected-react-router";
import { connectRouter} from "connected-react-router";
import history from "../utils/history";
import productsReducer from '../reducers/productsReducer'

const rootReducer = combineReducers({
    router: connectRouter(history),
    products: productsReducer
})

const configureStore = (history) => {
    const middleware = routerMiddleware(history);
    return createStore(
            rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
        applyMiddleware(thunk, middleware)
    )
}

export { configureStore }