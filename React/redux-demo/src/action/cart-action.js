const ADD_CART='ADD_CART';
const UPDATE_CART='UPDATE_CART';
const DELETE_CART='DELETE_CART';


const addCart=(product,quantity,unitCost)=>{
    return {type:ADD_CART,payload:{
      product,
      quantity,
      unitCost
    }}
}
const updateCart=(product,quantity,unitCost)=>{
    return {type:UPDATE_CART,payload:{
        product,quantity,unitCost
    }}
}
const deleteCart=(product)=>{
    return {type:DELETE_CART,payload:{
        product
    }}
}

export {ADD_CART,UPDATE_CART,DELETE_CART,addCart,updateCart,deleteCart}
