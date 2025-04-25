import { useParams } from "react-router-dom";
import { TRAINER_BIO } from "../../data/trainers";
import { Container, SubContainer } from "../../Components/ui/container";
import { Link } from "react-router-dom";
export default function TrainerBio() {
  const { name } = useParams();
  const trainer = TRAINER_BIO.find((item) => item.name === name);
  console.log(trainer)
  if (!trainer) {
    return <p>Trainer not found.</p>;
  }

  return (
    <Container>
      <SubContainer>
        <div>
          <p className="poppins font-sm mt-3">
            <Link to="/about" className="text-base">
              {" "}
              About
            </Link>{" "}
            | {trainer.name}
          </p>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-7 order-md-1 d-block order-1 my-auto">
            
      
            <h1 className="font-name bebas">{trainer.profession}</h1>
            <h1 className="font-md bebas text-base" style={{fontSize: '56px'}}>{trainer.name}</h1>
           

            <div className="d-flex d-md-none col-12 justify-content-center my-4">
              <div class="zoom">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  class="w-100 h-100"
                />
              </div>
            </div>
            <p className="font-p poppins lh-3">{trainer.bio}</p>
            <h1 className="font-name bebas mt-5 ">Past Experience</h1>
            <p className="font-p poppins lh-3">{trainer.experience}</p>
          </div>
          <div className="d-none d-md-flex col-12 col-md-5 order-md-2 mb-3">
            <div className="d-flex gap-5 w-100 justify-content-end">
              <div class="">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  class="zoom rounded-4"
                  style={{height:'473px', width:'395px', objectFit:'cover'}}
                />
              </div>
            </div>
          </div>
        </div>
      </SubContainer>
    </Container>
  );
}
