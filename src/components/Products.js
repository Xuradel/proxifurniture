import storeItems from "../data/items.json"
import StoreItem from "./StoreItem";
import { useState } from "react";
const Products = () => {
    const [palabra, setPalabra] = useState('')

    return (
        <div className="products-section">
            <div className="products-banner">
                <button className="products-button" onClick={() => setPalabra("clearance")}><img src={require("../images/banner.png")} alt="banner"></img></button>
            </div>
            <div className="mini-nav-bar">
                <li><button className="products-button" onClick={() => setPalabra("")}>All</button></li>
                <li><button className="products-button" onClick={() => setPalabra("living-room")}>Living Room</button></li>
                <li><button className="products-button" onClick={() => setPalabra("bedroom")}>Bedroom</button></li>
                <li><button className="products-button" onClick={() => setPalabra("home-office")}>Home Office</button></li>
                <li><button className="products-button" onClick={() => setPalabra("outdoor")}>Outdoor</button></li>
                <li><button className="products-button" onClick={() => setPalabra("dining-room")}>Dining Room</button></li>
                <li><button className="products-button" onClick={() => setPalabra("clearance")}><span className="clearance">Clearance</span></button></li>
            </div>
            <div className="products">
                <div className="products-container">
                    {palabra === "" ? storeItems.map(item => (
                        <StoreItem {...item} />
                    )) : null}
                    {storeItems.filter(furniture => furniture.type === palabra).map(item => (
                        <StoreItem {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;
