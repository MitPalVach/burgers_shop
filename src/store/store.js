import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import filtersReducer from "./reducers/filtersReducer";
import burgersReducer from "./reducers/burgersReducer";
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";


export const RootReducer = combineReducers({
    filters: filtersReducer,
    burgers: burgersReducer,
    cart: cartReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)))
export default store
window.store = store


