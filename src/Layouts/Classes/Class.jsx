import { Container, SubContainer } from "../../Components/ui/container";
import { WORKOUT_HEADLINE } from "../../data/workout";
import { useNavigate } from "react-router-dom";
import { WORKOUT } from "../../data/home";
export default function Class() {
  const navigate = useNavigate();

  const handleCardClick = (classes) => {
    navigate(`/workout/${classes}`);
  };
  return (
    <section className="classes" id="classes">
      <Container variant="transparent">
        <SubContainer>
          <div className="row justify-content-center text-center g-0 gy-3 mt-4">
            <div className="col-12 col-lg-10 d-flex flex-column align-items-center d-none d-sm-block">
              <h1 className="font-name bebas line-1  ">{WORKOUT.subtitle}</h1>
              <h1 className="font-md bebas line-1  text-base">
                {WORKOUT.title}
              </h1>
              <p className="font-p poppins line-1 ">{WORKOUT.body}</p>
            </div>
            <div className="col-12 d-flex flex-column align-items-center d-sm-none">
              <h1 className="font-name bebas line-1  ">{WORKOUT.subtitle}</h1>
              <h1
                className="font-md bebas lh-3 text-base "
                style={{ width: "15rem" }}
              >
                {WORKOUT.title}
              </h1>
              <p className="font-p poppins lh-2" style={{ width: "20rem" }}>
                {WORKOUT.body}
              </p>
            </div>
          </div>

          <div className="row row-cols-1 justify-content-center row-cols-sm-2 row-cols-md-3 g-4 mb-5 mt-3">
            {WORKOUT_HEADLINE.map((item, index) => (
              <div 
              key={index}
              className="col"
              style={{ cursor: 'pointer' }}
              onClick={() => handleCardClick(item.classes)} 
            >
                <div className="card text-white bg-transparent border-0 pb-2 h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    style={{ height: "100%" }}
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="font-name card-title bebas mt-3 ">
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
        </SubContainer>
      </Container>
    </section>
  );
}
