import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItems from "../data/items.json"



export default function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        ${cartItems.reduce((total,cartItem) =>{
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        },0
                        ).toFixed(2)}
                    </div>
                        {cartItems.length > 0 ? <Button className="checkout-button">Checkout</Button> : null}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

