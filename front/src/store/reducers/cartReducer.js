const ADD_TO_CART = 'ADD_TO_CART'

export const addToCartAction = payload => ({type: ADD_TO_CART, payload})

const checkProduct = (state, payload) => {
    const productInCart = state.find(el => el.id === payload.id)
        if(!productInCart){
            return [...state, {...payload, count: 1}]
        } else {
            productInCart.count++
            return [...state]
        }
    
}

export const cartReducer = (state=[], action) => {
    if(action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)
    } return state
}