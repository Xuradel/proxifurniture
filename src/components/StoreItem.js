import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = (item) => {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(item.id);


    return (
        <div className="product-card">
            <div className="product-image-card">
                <img src={item.image} alt="product-img" className="product-image"></img>
            </div>
            <div className="product-part1">
                <div className="product-name">
                    <h1>{item.name}</h1>
                </div>
                <div className="product-price">
                    <h1>${item.price}</h1>
                </div>
            </div>
            <div className="product-buttons">
                {quantity === 0 ?
                    <button class="cssbuttons-io-button" onClick={()=>increaseCartQuantity(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                        <span>Add to cart</span>
                    </button>
                    :
                    <div className="cart-count-items">
                        <div className="add-top">
                            <button class="cssbuttons-io-button" onClick={()=>increaseCartQuantity(item.id)}>
                                <span>+</span>
                            </button>
                            <div className="add-middle">
                                <span>{quantity}</span> in cart
                            </div>
                            <button class="cssbuttons-io-button" onClick={()=>decreaseCartQuantity(item.id)}>
                                <span>-</span>
                            </button>
                        </div>
                        <div className="add-bot">
                            <button class="cssbuttons-io-button-2" onClick={()=>removeFromCart(item.id)}>
                                <span>Remove</span></button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default StoreItem;