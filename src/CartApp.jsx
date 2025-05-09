import { useState } from "react";
import { CartView } from "./componets/CartView"
import { CatalogView } from "./componets/CatalogView"

const initialCartItems = [
    // {
    //     product: {

    //     },
    //     quantity: 1,
    // }
];

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((item) => item.product.id === product.id);
        if (hasItem) {
            // setCartItems([
            //     ...cartItems.filter((item) => item.product.id !== product.id),
            //     {
            //         product: product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])
            setCartItems(
                cartItems.map((item) => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                }
                return item;
            }))
        } else {
            setCartItems([
                ...cartItems,
                {
                    product: product,
                    quantity: 1,
                }
            ]);  
        }
            
    }
const handlerDeleteProductCart = (id) => {
    setCartItems([
        ...cartItems.filter((item) => item.product.id !== id)
    ])
}
    


    return (
        <>

            <div className="container">
                <h3>Cart App</h3>
                <CatalogView handler={ handlerAddProductCart } />

                { cartItems?.length <= 0 || (
                    <div className="my-4 w-50">
                        <CartView items={ cartItems } handlerDelete={ handlerDeleteProductCart } />
                    </div>
                )}
                

            </div>
        </>
    )
}