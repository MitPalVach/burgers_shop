import {combineReducers, createStore} from "redux";
import filtersReducer from "./reducers/filtersReducer";
import burgersReducer from "./reducers/burgersReducer";


export const RootReducer = combineReducers({
    filers: filtersReducer,
    burgers: burgersReducer,
    // cart: cartReducer,
})
const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
window.store = store


