import { Container, SubContainer } from "../../Components/ui/container";
import { WORKOUT_SCHED } from "../../data/workout";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Workout() {
  const [isSticky, setIsSticky] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);
  const sidebarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sidebarRef.current) return;

      const container = containerRef.current;
      const sidebar = sidebarRef.current;

      const containerRect = container.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;
      const viewportHeight = window.innerHeight;

 
      const distanceToBottom = containerRect.bottom - viewportHeight;

     
      if (distanceToBottom <= 0) {
        setReachedBottom(true);
        setIsSticky(false);
      } else {
        setReachedBottom(false);
       
        setIsSticky(containerRect.top <= 60);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { classes } = useParams(); 
  const workouts = WORKOUT_SCHED.find((item) => item.classes === classes);

  if (!workouts) {
    return <p>Workout not found.</p>;
  }
  return (
    <Container>
      <SubContainer>
        <div>
          <p className="poppins font-sm">
            <Link to="/classes" className="text-base">
              {" "}
              Classes
            </Link>{" "}
            | {workouts.name}
          </p>
        </div>
        <div className="row my-5">
          <div className="col-lg-9 mb-4">
            <div className="card h-100 border-0 bg-transparent text-white">
              <div className="card-body line-sm">
                <h1 className="font-name bebas  mb-2">{workouts.classes}</h1>
                <h1 className="font-lg poppins lh-1 mb-1 bebas text-base">
                  {workouts.name}
                </h1>
                <p
                  className="font-p lh-2 poppins mb-0 "
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.description}
                </p>
                <img src={workouts.image} className="w-100 my-3" />

                <div className=" mt-5 d-block d-lg-none">
                  <div
                    className="px-3 py-4 bg-gray text-white"
                    style={{ height: "auto", overflow: "auto" }}
                  >
                    <h1 className="bebas font-class">Class Detail</h1>
                    <p className="card-title text-start poppins font-p">
                      {workouts.classDetail.detail}
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Duration:{" "}
                      <span className="text-base poppins font-p fw-normal">
                        {workouts.classDetail.duration}
                      </span>
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Intensity:{" "}
                      <span className="text-base poppins font-p fw-normal">
                        {workouts.classDetail.intensity}
                      </span>
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Fitness:{" "}
                      <span className="text-base poppins font-p fw-normal">
                        {workouts.classDetail.fitnessLevel}
                      </span>
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Schedule:{" "}
                      <span className="text-base poppins font-p fw-normal">
                        {" "}
                        {workouts.classDetail.schedule.join(", ")}
                      </span>
                    </p>
                    <hr className="my-4" />

                    <div className="row">
                      <div className="col-3">
                        <img
                          className="rounded-circle"
                          height="70"
                          width="70"
                          src={workouts.classDetail.img}
                        />
                      </div>

                      <div className="col-9 d-flex flex-column justify-content-center ">
                        <p className="poppins mb-0 fw-lighter">INSTRUCTOR</p>
                        <p className="poppins mb-0">
                          {workouts.classDetail.instructor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="font-lg poppins mt-4 bebas text-base">
                  ABOUT CLASS
                </h1>
                <p
                  className="font-p poppins mb-0 "
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.about1}
                </p>
                <p
                  className="font-p poppins mb-0 my-4"
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.about2}
                </p>
                <p className="font-p poppins mb-0 my-4">What to Expect:</p>
                <ul>{workouts.wte}</ul>
                <h1 className="font-lg poppins lh-1 mb-1 bebas text-base mt-5 ">
                  Class Schedule
                </h1>
                <p
                  className="font-p poppins mb-0 mt-0"
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.classSched}
                </p>
                <h1 className="font-name poppins lh-1 mb-1 bebas text-base my-4">
                  Monday
                </h1>
                <ul
                  className="font-p poppins mb-0 "
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.time.monday}
                </ul>
                <h1 className="font-name poppins lh-1 mb-1 bebas text-base my-4">
                  Wednesday
                </h1>
                <ul
                  className="font-p poppins mb-0 "
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.time.monday}
                </ul>
                <h1 className="font-name poppins lh-1 mb-1 bebas text-base my-4">
                  Friday
                </h1>
                <ul
                  className="font-p poppins mb-0 "
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.time.monday}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 d-lg-block d-none mt-5" ref={containerRef}>
            <div
              ref={sidebarRef}
              className={`px-3 py-4 bg-gray text-white sticky-sidebar ${
                isSticky ? "sticky" : ""
              }`}
              style={{
                height: "auto",
                overflow: "auto",
                position: reachedBottom
                  ? "absolute"
                  : isSticky
                  ? "fixed"
                  : "static",
                top: reachedBottom ? "auto" : isSticky ? "100px" : "auto",
                bottom: reachedBottom ? "0" : "auto",
                width: isSticky || reachedBottom ? "calc(270px)" : "100%",
              }}
            >
              <h1 className="bebas font-class">Class Detail</h1>
              <p className="card-title text-start poppins font-p">
                {workouts.classDetail.detail}
              </p>
              <p className="my-2 poppins fw-lighter">
                Duration:{" "}
                <span className="text-base poppins font-p fw-normal">
                  {workouts.classDetail.duration}
                </span>
              </p>
              <p className="my-2 poppins fw-lighter">
                Intensity:{" "}
                <span className="text-base poppins font-p fw-normal">
                  {workouts.classDetail.intensity}
                </span>
              </p>
              <p className="my-2 poppins fw-lighter">
                Fitness:{" "}
                <span className="text-base poppins font-p fw-normal">
                  {workouts.classDetail.fitnessLevel}
                </span>
              </p>
              <p className="my-2 poppins fw-lighter">
                Schedule:{" "}
                <span className="text-base poppins font-p fw-normal">
                  {" "}
                  {workouts.classDetail.schedule.join(", ")}
                </span>
              </p>
              <hr className="my-4" />

              <div className="row">
                <div className="col-4">
                  <img
                    className="rounded-circle"
                    height="70"
                    width="70"
                    src={workouts.classDetail.img}
                  />
                </div>

                <div className="col-8 d-flex flex-column justify-content-center ">
                  <p className="poppins mb-0 fw-lighter">INSTRUCTOR</p>
                  <p className="poppins mb-0">
                    {workouts.classDetail.instructor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SubContainer>
    </Container>
  );
}
