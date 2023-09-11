const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY'

export const loadProductsByCategory = payload => ({type: LOAD_PRODUCTS_BY_CATEGORY, payload})

export const productByCategoryReducer = (state={}, action) => {
    if(action.type === LOAD_PRODUCTS_BY_CATEGORY){
        return action.payload
    } else {
        return state
    }
}
