import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer'
import { productByCategoryReducer } from './reducers/productsByCategoryReducer'
import { singleProductReducer } from './reducers/singleProductReducer'
import { allProductsReducer } from './reducers/allProductsReducer'
import { cartReducer } from './reducers/cartReducer'
import { themeReducer } from './reducers/themeReducer'


const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productByCategoryReducer,
    singleProduct: singleProductReducer ,
    allProducts: allProductsReducer,
    cart: cartReducer,
    theme: themeReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))

