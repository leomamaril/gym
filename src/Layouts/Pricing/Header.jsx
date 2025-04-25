import { Container, SubContainer } from "../../Components/ui/container";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <SubContainer>
        <div>
          <p className="poppins font-sm">
            <Link to="/home" className="text-base">
              {" "}
              Home
            </Link>{" "}
            | Pricing
          </p>
        </div>
        <div className="row justify-content-center text-center g-0 gy-3 mt-5">
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center d-none d-sm-block mb-0">
            <h1 className="font-name bebas line-1  ">PRICING PLAN</h1>
            <h1 className="font-md bebas line-1  text-base">
              SUBSCRIBE TO OUR GYM
            </h1>
            <p className="font-p poppins line-1 ">
              Ready to take your fitness to the next level? Join Gym Fit today
              and unlock access to state-of-the-art equipment, expert coaches,
              dynamic classes, and a community that keeps you motivated.
            </p>
          </div>
          <div className="col-12 d-flex flex-column align-items-center d-sm-none">
            <h1 className="font-name bebas line-1  ">PRICING PLAN</h1>
            <h1 className="font-md bebas lh-3 text-base ">
              SUBSCRIBE TO OUR GYM
            </h1>
            <p className="font-p poppins lh-2" style={{ width: "20rem" }}>
              Ready to take your fitness to the next level? Join Gym Fit today
              and unlock access to state-of-the-art equipment, expert coaches,
              dynamic classes, and a community that keeps you motivated.
            </p>
          </div>
        </div>
        
      </SubContainer>
    </Container>
  );
}
