import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuatityProductCart } from "../reducer/itemsActions";


const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((item) => item.product.id === product.id);
        if (hasItem) {
            dispatch({
                type: UpdateQuatityProductCart,
                payload: product,
            });
        } else {
           dispatch({
                type: AddProductCart,
                payload: product,
            });

        }
            
    }
const handlerDeleteProductCart = (id) => {
    dispatch({
        type: DeleteProductCart,
        payload: id,
    });
}
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }

}