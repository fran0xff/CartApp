import { AddProductCart, UpdateQuatityProductCart, DeleteProductCart } from "./itemsActions";


export const itemsReducer = (state=[], action) => {
    switch(action.type){
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }   
            ];
        case UpdateQuatityProductCart:
            return state.map((item) => {
                if(item.product.id === action.payload.id){
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                }
                return item;
            });
        case DeleteProductCart:
            return state.filter((item) => item.product.id !== action.payload);
        default:
            return state;
    }
}

