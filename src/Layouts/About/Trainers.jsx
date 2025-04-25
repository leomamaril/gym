import { Container, SubContainer } from "../../Components/ui/container";
import { TRAINER } from "../../data/about";
import { TRAINERS } from "../../data/trainers";
import { useNavigate } from "react-router-dom";
export default function Trainers() {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/trainer_bio/${name}`);
  };
  return (
    <section className="">
      <Container variant="transparent">
        <SubContainer>
          <div className="row justify-content-center text-center g-0 gy-3 mt-4">
            <div
              className="col-12 col-lg-8 d-flex flex-column align-items-center d-none d-sm-block"
              style={{ width: "40rem" }}
            >
              <h1 className="font-name bebas line-1  ">{TRAINER.subtitle}</h1>
              <h1 className="font-md bebas line-1  text-base">
                {TRAINER.title}
              </h1>
              <p className="font-p poppins line-1 ">{TRAINER.body}</p>
            </div>
            <div className="col-12 d-flex flex-column align-items-center d-sm-none">
              <h1 className="font-name bebas line-1  ">{TRAINER.subtitle}</h1>
              <h1
                className="font-md bebas lh-3 text-base "
                style={{ width: "15rem" }}
              >
                {TRAINER.title}
              </h1>
              <p className="font-p poppins lh-2" style={{ width: "20rem" }}>
                {TRAINER.body}
              </p>
            </div>
          </div>

          <div className="row row-cols-1 justify-content-center row-cols-sm-2 row-cols-md-3 g-4 mb-5 mt-2 ">
            {TRAINERS.map((item, index) => (
              <div
                key={index}
                className="col "
                style={{ cursor: 'pointer' }}
                onClick={() => handleCardClick(item.name)} 
              >
                <div className="card text-white bg-gray pb-2 h-100 cursor-pointer rounded-4">
                  <img
                    src={item.image}
                    className="card-img-top "
                    style={{ height: "100%" }}
                    alt={item.name}
                  />
                  <div className="card-body">
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
        </SubContainer>
      </Container>
    </section>
  );
}
