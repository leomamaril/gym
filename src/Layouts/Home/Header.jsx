import image_1 from "../../assets/img/image1.png";
import image_2 from "../../assets/img/image.png";
import { GYM_HEADER } from "../../data/home";
import { Container, SubContainer } from "../../Components/ui/container";
export default function Header() {
  return (
    <section className="">
      <Container variant="primary">
        <SubContainer>
          <div className="row align-items-end justify-content-between g-0 gy-3">
            <div className="col-md-7 order-1 d-none d-lg-block">
              <h1 className="font-xl bebas lh-1 mb-0">{GYM_HEADER.title}</h1>
            </div>
            {/* Mobile */}
            <div className="col-12 col-md-11 d-flex d-lg-none">
              <h1 className="font-xl bebas lh-1 mb-0">{GYM_HEADER.title}</h1>
            </div>


            <div className="col-12 col-md-5 d-none d-lg-block order-2 pb-3">
              <div className="d-flex flex-md-row flex-column gap-4 justify-content-end">
                <button className="btn-gymfit-primary font-btn">Book and Appointment</button>
                <button className="btn-gymfit-outline font-btn">Browse Class</button>
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-lg-4 order-1">
              {/* Mobile */}
              <div className="d-block d-lg-none mb-3">
                <img src={image_2} alt="Image 2" className="img-fluid w-100" />
              </div>

              <div className="col-7 col-lg-12">
                <img src={image_1} alt="Image 1" className="img-fluid w-100" />
              </div>

              <div className="d-none d-lg-block">
                <p className="mt-3 lh-2 font-p">{GYM_HEADER.body}</p>
              </div>
              {/* Mobile */}
              <div className="d-flex d-lg-none justify-content-center gap-3 mt-3 w-100">
                <p className="mt-3 lh-2 font-p">{GYM_HEADER.body}</p>
              </div>
              {/* Mobile */}
              <div className="d-flex d-lg-none justify-content-center gap-3 mt-3 w-100">
                <button className="btn-gymfit-primary w-100 font-btn">
                  BE A MEMBER
                </button>
                <button className="btn-gymfit-outline w-100 font-btn">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col d-none d-lg-block order-2">
              <img src={image_2} alt="Image 2" className="img-fluid w-100" />
            </div>
          </div>
        </SubContainer>
      </Container>
    </section>
  );
}
