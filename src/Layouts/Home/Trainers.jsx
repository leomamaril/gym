import { TRAINER, TRAINERS } from '../../data/home';
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
        setCurrentIndex(prev => (prev + 1) % TRAINERS.length);
    };
    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + TRAINERS.length) % TRAINERS.length);
    };
    const getVisibleItems = () => {
        if (windowSize.width < 576) {
            return [
                TRAINERS[currentIndex],
            ];
        } else if (windowSize.width < 768) {
            return [
                TRAINERS[currentIndex],
                TRAINERS[(currentIndex + 1) % TRAINERS.length],
            ];
        } else {
            return [
                TRAINERS[currentIndex],
                TRAINERS[(currentIndex + 1) % TRAINERS.length],
                TRAINERS[(currentIndex + 2) % TRAINERS.length]
            ];
        }
    };
    const visibleItems = getVisibleItems();
    return (
        <section className=''>
            <Container variant='transparent'>
                <SubContainer >
                    <div className="row align-items-end g-0 gy-3 mt-5">
                        <div className="col-12 col-md-12 order-1 order-md-1">
                            <h1 className="font-name bebas">{TRAINER.subtitle}</h1>
                            <h1 className="font-md bebas text-base">{TRAINER.title}</h1>

                            {/* Only appear on large screens */}
                            <div className="d-none d-lg-flex flex-column flex-md-row justify-content-between gap-3 ">
                                <p className="font-p poppins mb-0" style={{ width: '35rem' }}>{TRAINER.body}</p>
                                <div>
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

                            {/* Only appear on small and medium screens */}

                            <div className="d-flex d-lg-none flex-column flex-md-row justify-content-between gap-3 mt-3">
                                <p className="font-p poppins mb-0" >{TRAINER.body}</p>
                                <div className='d-flex gap-3 justify-content-end'>
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
                    </div>

                    <div className="carousel-container">
                        <div className="carousel-track py-3">
                            {visibleItems.map((item, index) => (
                                <div key={index} className="card text-white bg-gray pb-2 " >
                                    <img src={item.img} className="card-img-top" style={{ height: "100%" }} alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="font-name card-title bebas mt-3 ms-3 text-base">{item.title}</h5>
                                        <p className="font-p card-text poppins ms-3">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-none d-sm-block my-4">
                        <div className="d-flex gap-3 w-100 justify-content-center">
                            <button className="btn-gymfit-primary text-center fonr-btn px-5 bebas">View All Classes</button>
                        </div>
                    </div>
                    <div className="d-flex d-sm-none justify-content-center gap-3 mt-3 w-100">
                        <button className="btn-gymfit-primary w-100 font-btn">View All Classes</button>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}