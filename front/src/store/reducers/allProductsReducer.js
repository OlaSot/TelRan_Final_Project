const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'

export const loadAllProductsAction = payload => ({type: LOAD_ALL_PRODUCTS, payload})
export const sortProductsAction = payload => ({type: SORT_PRODUCTS, payload})


export const allProductsReducer = (state=[], action) => {
    if(action.type === LOAD_ALL_PRODUCTS){
        return action.payload
    } else if(action.type === SORT_PRODUCTS){
        
    }
    return state
}