import { WORKOUT } from "../../data/home";
import { WORKOUT_HEADLINE } from "../../data/workout";
import { useState, useEffect } from "react";
import { Container, SubContainer } from "../../Components/ui/container";
import { Link,useNavigate } from "react-router-dom";
import vector1 from '../../assets/img/1.png'
import vector2 from '../../assets/img/2.png'
export default function CarouselList() {

  const navigate = useNavigate();

  const handleCardClick = (classes) => {
    navigate(`/workout/${classes}`);
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
    setCurrentIndex((prev) => (prev + 1) % WORKOUT_HEADLINE.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + WORKOUT_HEADLINE.length) % WORKOUT_HEADLINE.length
    );
  };

  const getVisibleItems = () => {
    if (windowSize.width < 576) {
      return [WORKOUT_HEADLINE[currentIndex], 
      WORKOUT_HEADLINE[(currentIndex + 1) % WORKOUT_HEADLINE.length],
      WORKOUT_HEADLINE[(currentIndex + 2) % WORKOUT_HEADLINE.length],
      WORKOUT_HEADLINE[(currentIndex + 3) % WORKOUT_HEADLINE.length],
      WORKOUT_HEADLINE[(currentIndex + 4) % WORKOUT_HEADLINE.length],
    
    ];

    } else if (windowSize.width < 768) {
      return [
        WORKOUT_HEADLINE[currentIndex],
        WORKOUT_HEADLINE[(currentIndex + 1) % WORKOUT_HEADLINE.length],
      ];
    } else {
      return [
        WORKOUT_HEADLINE[currentIndex],
        WORKOUT_HEADLINE[(currentIndex + 1) % WORKOUT_HEADLINE.length],
        WORKOUT_HEADLINE[(currentIndex + 2) % WORKOUT_HEADLINE.length],
      ];
    }
  };
  const visibleItems = getVisibleItems();
  return (
    <section>
      <Container variant="primary">
        <SubContainer>
          <div className="row align-items-end g-0 gy-3">
            <div className="col-12 col-md-12 order-1 order-md-1">
              <h1 className="font-name bebas mt-5">{WORKOUT.subtitle}</h1>
              <h1 className="font-md bebas text-base">{WORKOUT.title}</h1>
              <div className="d-flex flex-column flex-md-row gap-3">
                <p className="font-p poppins mb-0 flex-grow-1">
                  {WORKOUT.body}
                </p>
                <div className="d-none gap-3 d-md-block align-self-md-end">
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
            <div className="col-12 col-md-3 gap-3 order-2 order-md-2 d-md-none text-end mt-3">
              <button
                onClick={prevSlide}
                className="carousel-button carousel-button-prev mx-3"
                aria-label="Previous slide"
              >
                <img src={vector2} alt="Previous" />
              </button>
              <button onClick={nextSlide}className="carousel-button carousel-button-next "aria-label="Next slide">
              <img src={vector1} alt="Next" />
              </button>
            </div>
          </div>


          
          <div className="workout-container">
            <div className="workout-track ">
              {visibleItems.map((item, index) => (
                <div 
                key={index}
                className="col"
                style={{ cursor: 'pointer' }}
                onClick={() => handleCardClick(item.classes)} 
              >
                <div className="workout text-white bg-transparent pb-2 h-100 border-0">
                  <img
                    src={item.image}
                    className="workout-img h-100"
                    alt={item.title}
                  />
                  <div className="workout-body">
                    <h5 className="font-class card-title text-base bebas mt-3">
                      {item.name}
                    </h5>
                    <p className="font-p card-text poppins">{item.body}</p>
                    <a href="#" className="font-btn text-base bebas">
                      Discover &gt;
                    </a>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="d-none d-sm-block">
            <div className="d-flex w-100 justify-content-center my-4">
              <Link to="/classes#classes" className="btn-gymfit-primary w-50 text-center bebas font-btn">
                View All Classes
              </Link>
            </div>
          </div>
          <div className="d-flex d-sm-none justify-content-center my-4 w-100">
            <Link  to="#classes" className="btn-gymfit-primary w-100 font-btn text-center">
              View All Classes
            </Link>
          </div>
        </SubContainer>
      </Container>
    </section>
  );
}
