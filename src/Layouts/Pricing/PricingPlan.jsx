import React from "react";
import { plans } from "../../data/pricing";
import { Container, SubContainer } from "../../Components/ui/container";
import check from "../../assets/img/check.png";
export default function PricingPlan() {
  return (
    <section>
      <Container>
        <SubContainer>
          <div className="row g-4 d-flex align-items-center mb-5">
            {plans.map((plan) => (
              <div key={plan.name} className="col-12 col-lg-4">
                <div
                  className="bg-gray pricing-card px-4 py-5 d-flex flex-column  justify-content-center rounded-3 position-relative" // Added flex classes
                  style={{
                    height: plan.name === "Standard Plan" ? "600px" : "550px",
                    border:
                      plan.name === "Standard Plan"
                        ? "2px solid #E2712D"
                        : "none",
                  }}
                >
                  {plan.name === "Standard Plan" && (
                    <div
                      className="position-absolute"
                      style={{
                        top: "-22px",
                        right: "-85px",
                        width: "200px",
                        height: "0",
                        transform: "rotate(45deg)",
                        transformOrigin: "0 0",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "195px",
                          borderBottom: "30px solid #C8662A",
                          borderLeft: "30px solid transparent",
                          borderRight: "30px solid transparent",
                        }}
                      >
                        <div
                          className=" bebas"
                          style={{
                            position: "absolute",
                            top: "3px",
                            left: "0",
                            right: "0",
                            textAlign: "center",
                            fontSize: "18px",
                          }}
                        >
                          BEST OFFER
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="">
                    {" "}
           
                    <h3 className="bebas font-name text-base">{plan.name}</h3>
                    <div className="poppins font-md">{plan.price}</div>
                  </div>

                  <p className="font-p poppins mb-0">
                    {" "}
                  
                    {plan.description}
                  </p>

                  <ul className="font-p poppins list-unstyled">
                    {" "}
                   
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mt-3">
                        <img src={check} className="pe-2"/> {" "}{feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pricing-button text-center mt-4">
                    
                    {plan.button}
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
