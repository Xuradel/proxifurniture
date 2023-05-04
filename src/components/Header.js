import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import { useShoppingCart } from '../context/ShoppingCartContext';

function script() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        })
    }

    document.querySelectorAll(".nav-link").forEach(n => n.
        addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }))
}

const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const {openCart, cartQuantity} = useShoppingCart()
    useEffect(() => {
        if (isMobile) {
            script();
        }
    }, )

    return (
        <>
            <header className='navbar'>
                <div className='logo-section'>
                    <h1 id="logo"><span className='proxi'>Proxi</span>-Furniture</h1>
                </div>
                <div className='nav-section'>
                    <nav>
                        <ul className="nav-menu">
                            <li className='nav-item'><a href="#" className='nav-link'><Link to='/proxifurniture' className='nav-link'>Home</Link></a></li>
                            <li className='nav-item'><a href="#" className='nav-link'><Link to='/about' className='nav-link'>About</Link></a></li>
                            <li className='nav-item'><a href="#" className='nav-link'><Link to='/products' className='nav-link'>Store</Link></a></li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </nav>
                </div>
                <div className="cart">
                    <form class="form">
                        <button>
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <input class="input" placeholder="Search" required="" type="text" />
                        <button class="reset" type="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </form>
                    <button className='cart-button' onClick={openCart}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" /></svg>
                        {cartQuantity > 0 ? <div className='counter'>{cartQuantity}</div>: null }
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;