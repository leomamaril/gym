import { useState, useEffect } from 'react';
import { CAROUSEL } from "../data/home";

export default function Carou() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % CAROUSEL.length);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + CAROUSEL.length) % CAROUSEL.length);
    };

    // Get current and next items
    const visibleItems = [
        CAROUSEL[currentIndex],
        CAROUSEL[(currentIndex + 1) % CAROUSEL.length],
        CAROUSEL[(currentIndex + 2) % CAROUSEL.length]
    ];
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {visibleItems.map((item, index) => (
                    <div className="card bg-black text-white" >
                    <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div className="card-body">
                      <h5 className="card-title bebas">{item.title}</h5>
                      <p className="card-text poppins">{item.body}</p>
                      <a href="#" className="btn btn-primary">{item.discover}</a>
                    </div>
                  </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="carousel-button carousel-button-prev"
                aria-label="Previous slide"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="carousel-button carousel-button-next"
                aria-label="Next slide"
            >
                &gt;
            </button>

        </div>
    );
}