import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'


const Homepage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <div className='home'>
            <div className='home-text'>
                <div>
                <h1>Luxury Modern Furniture At The Best Quality and Price.</h1>
                <p>Provide you with premium class design and high-class materials at an affordable price.</p>
                <a href="/proxifurniture" className='nav-link'><Link to='/products' className='nav-link'>
                    <button className='home-button'>
                        Order now!
                    </button></Link></a>
                    </div>
                    <div>
                        {!isMobile?<img src={require("../images/redchair.png")} alt='redChair' className='text-image'></img>:null}
                    </div>
            </div>
            <div className="home-hero-image">
                <img src={require("../images/yellowchair.png")} alt="yellowChair" className='hero-image'></img>
            </div>
        </div>


    )
}
export default Homepage;