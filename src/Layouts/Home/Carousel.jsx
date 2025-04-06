import { WORKOUT, CAROUSEL } from '../../data/home';
import { useState, useEffect } from 'react';
import { Container, SubContainer } from '../../Components/ui/container';
export default function CarouselList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % CAROUSEL.length);
    };
    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + CAROUSEL.length) % CAROUSEL.length);
    };

    const getVisibleItems = () => {
        if (windowSize.width < 576) {
            return [
                CAROUSEL[currentIndex],
            ];
        } else if (windowSize.width < 768) {
            return [
                CAROUSEL[currentIndex],
                CAROUSEL[(currentIndex + 1) % CAROUSEL.length],
            ];
        } else {
            return [
                CAROUSEL[currentIndex],
                CAROUSEL[(currentIndex + 1) % CAROUSEL.length],
                CAROUSEL[(currentIndex + 2) % CAROUSEL.length]
            ];
        }
    };
    const visibleItems = getVisibleItems();
    return (
        <section className=''>
            <Container variant='primary'>
                <SubContainer >
                    <div className="row align-items-end g-0 gy-3">
                        <div className="col-12 col-md-12 order-1 order-md-1">
                            <h1 className="fs-5 bebas mt-5">{WORKOUT.subtitle}</h1>
                            <h1 className="display-5 bebas text-base">{WORKOUT.title}</h1>
                            <div className="d-flex flex-column flex-md-row gap-3">
                                <p className="fs-6 poppins mb-0 flex-grow-1">{WORKOUT.body}</p>
                                <div className="d-none gap-3 d-md-block align-self-md-end">
                                    <button
                                        onClick={prevSlide}
                                        className="carousel-button carousel-button-prev mx-3"
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
                            </div>
                        </div>
                        <div className="col-12 col-md-3 gap-3 order-2 order-md-2 d-md-none text-end mt-3">
                            <button
                                onClick={prevSlide}
                                className="carousel-button carousel-button-prev mx-3"
                                aria-label="Previous slide"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={nextSlide}
                                className="carousel-button carousel-button-next "
                                aria-label="Next slide"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-track ">
                            {visibleItems.map((item, index) => (
                                <div key={index} className="card text-white bg-transparent" >
                                    <img src={item.img} className="card-img-top" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="fs-4 card-title text-base bebas mt-3">{item.title}</h5>
                                        <p className="fs-6 card-text poppins">{item.body}</p>
                                        <a href="#" className="fs-5 text-base bebas">{item.discover}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-none d-sm-block">
                        <div className="d-flex gap-3 w-100 justify-content-center">
                            <button className="btn-gymfit-primary text-center px-5 bebas ps-5 pe-5">View All Classes</button>
                        </div>
                    </div>
                    <div className="d-flex d-sm-none justify-content-center gap-3 mt-3 w-100">
                        <button className="btn-gymfit-primary w-100">View All Classes</button>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}