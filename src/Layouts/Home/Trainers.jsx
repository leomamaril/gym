import { TRAINER } from "../../data/home";
import { TRAINERS } from "../../data/trainers";
import { useState, useEffect } from "react";
import { Container, SubContainer } from "../../Components/ui/container";
import { Link, useNavigate } from "react-router-dom";

import vector1 from "../../assets/img/1.png";
import vector2 from "../../assets/img/2.png";
export default function CarouselList() {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/trainer_bio/${name}`);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TRAINERS.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TRAINERS.length) % TRAINERS.length);
  };
  const getVisibleItems = () => {
    if (windowSize.width < 576) {
      return [
        TRAINERS[currentIndex],
        TRAINERS[(currentIndex + 1) % TRAINERS.length],
        TRAINERS[(currentIndex + 2) % TRAINERS.length],
        TRAINERS[(currentIndex + 3) % TRAINERS.length],
        TRAINERS[(currentIndex + 4) % TRAINERS.length],
    
    
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
        TRAINERS[(currentIndex + 2) % TRAINERS.length],
      ];
    }
  };
  const visibleItems = getVisibleItems();
  return (
    <section className="">
      <Container variant="transparent">
        <SubContainer>
          <div className="row align-items-end g-0 gy-3 mt-5">
            <div className="col-12 col-md-12 order-1 order-md-1">
              <h1 className="font-name bebas">{TRAINER.subtitle}</h1>
              <h1 className="font-md bebas text-base">{TRAINER.title}</h1>

              {/* Only appear on large screens */}
              <div className="d-none d-lg-flex flex-column flex-md-row justify-content-between gap-3 ">
                <p className="font-p poppins mb-0" style={{ width: "35rem" }}>
                  {TRAINER.body}
                </p>
                <div>
                  <button
                    onClick={prevSlide}
                    className="carousel-button carousel-button-prev mx-3"
                    aria-label="Previous slide"
                  >
                    <img src={vector2} alt="Previous" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="carousel-button carousel-button-next"
                    aria-label="Next slide"
                  >
                    <img src={vector1} alt="Next" />
                  </button>
                </div>
              </div>

              {/* Only appear on small and medium screens */}

              <div className="d-flex d-lg-none flex-column flex-md-row justify-content-between gap-3 mt-3">
                <p className="font-p poppins mb-0">{TRAINER.body}</p>
                <div className="d-flex gap-3 justify-content-end">
                  <button
                    onClick={prevSlide}
                    className="carousel-button carousel-button-prev mx-3"
                    aria-label="Previous slide"
                  >
                    <img src={vector2} alt="Previous" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="carousel-button carousel-button-next"
                    aria-label="Next slide"
                  >
                    <img src={vector1} alt="Next" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="trainer-container">
            <div className="trainer-track py-3">

              {visibleItems.map((item, index) => (
                <div
                key={index}
                className="col "
                style={{ cursor: 'pointer' }}
                onClick={() => handleCardClick(item.name)} 
              >

                <div className="trainer text-white bg-gray pb-2 h-100 border-0 rounded-4">
                  <img
                    src={item.image}
                    className="trainer-img"
                   
                    alt={item.name}
                  />
                  <div className="trainer-body">
                    <h5 className="font-name card-title bebas mt-3 ms-3 text-base">
                      {item.name}
                    </h5>
                    <p className="font-p card-text poppins ms-3">
                      {item.profession}
                    </p>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-none d-sm-block">
            <div className="d-flex w-100 justify-content-center my-4">
              <Link
                to="/about"
                className="btn-gymfit-primary w-50 text-center bebas font-btn"
              >
                View All Trainers
              </Link>
            </div>
          </div>
          <div className="d-flex d-sm-none justify-content-center text-center my-4 w-100">
            <Link to="/about" className="btn-gymfit-primary w-100 font-btn">
              View All Trainers
            </Link>
          </div>
        </SubContainer>
      </Container>
    </section>
  );
}
