import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadProductsByCategory } from "../store/reducers/productsByCategoryReducer"
import { loadOneProductAction } from "../store/reducers/singleProductReducer"



export const getProductsByCategory = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(loadProductsByCategory(json))})
    }
}

export const getAllProducts = dispatch => {
    fetch('http://localhost:3333/products/all')
    .then(res => res.json())
    .then(json => { dispatch(loadAllProductsAction(json));
    })
}

export const getOneProduct = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
        .then(res => res.json())
        .then(json => {dispatch(loadOneProductAction(json[0]))})
    }
}





    
    export  function getSale(obj){
        fetch('http://localhost:3333/sale/send', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            console.log(json);
        })
    }


    export  function sendOrder(obj){
        fetch('http://localhost:3333/order/send', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            console.log(json);
        })
    }
