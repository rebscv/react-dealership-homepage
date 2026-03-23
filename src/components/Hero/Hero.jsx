import "./Hero.css"
import heroImage from "../../assets/images/banners/hero-car.webp";

function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content">

                <h1>Find Your Next Vehicle</h1>
                <p>Explore our latest range of new and used cars</p>
                <button>Browse Stock</button>

            </div>
        </section>
    )
}

export default Hero;