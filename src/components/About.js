const About = () => {
    return (
        <div className="about-section">
            <div className="about-combo">
                <div className="about-text">
                    <h1><span className="color-text">Quality</span> furniture for every room in your home</h1>
                    <p>We emphasize the range of furniture options available at the
                        shop and the commitment to providing quality products.</p>
                </div>
                <div className="about-image">
                    <img src={require("../images/livingroom.png")} alt="livingRoom"></img>
                </div>
            </div>
                <img src={require("../images/homeoffice.png")} className="middle-image" alt="homeOffice"></img>
            <div className="about-combo2">
                <div className="about-text">
                    <h1>Where comfort meets <span className="color-text">style</span></h1>
                    <p>We believe in the importance of finding furniture that not only looks
                        great but also feels comfortable and welcoming.</p>
                </div>
                <div className="about-image">
                    <img src={require("../images/sofa.png")} alt="sofa"></img>
                </div>
            </div>
        </div>

    )
}
export default About;