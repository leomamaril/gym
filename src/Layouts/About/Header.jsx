import image_2 from "../../assets/img/image2.png";
import image_3 from "../../assets/img/image3.png";
import { ABOUT_HEADER } from "../../data/about";
import { Container, SubContainer } from "../../Components/ui/container";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
  return (
    <Container>
      <SubContainer>
        <div>
          <p className="poppins font-sm">
            <Link to="/home" className="text-base">
              {" "}
              Home
            </Link>{" "}
            | About Us
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-5 order-md-1 order-1">
            <h1 className="font-name bebas">{ABOUT_HEADER.about}</h1>
            <h1 className="font-md bebas text-base">{ABOUT_HEADER.title}</h1>
            <div className="d-flex d-md-none">
              <img
                src={image_3}
                alt="Image 3"
                className="img-fluid mt-3 w-50  mb-3"
              />
              <div className="mx-3">
                <img
                  src={image_2}
                  alt="Image 2"
                  className="img-fluid mt-3 w-100 mb-3"
                />
              </div>
            </div>
            <p className="font-p poppins lh-3">{ABOUT_HEADER.body1}</p>
            <p className="font-p poppins lh-3">{ABOUT_HEADER.body2}</p>
            <p className="font-p poppins lh-3">{ABOUT_HEADER.body3}</p>
          </div>
          <div className="d-none d-md-flex col-12 col-md-7 order-md-2 mb-3" ref={containerRef}>
  <div
    ref={sidebarRef}
    className={`d-flex gap-md-5 gap-3 ${isSticky ? "sticky" : ""}`}
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
      width: isSticky || reachedBottom ? "auto" : "auto", 
      maxWidth: "100%",
    }}
  >
    <div >
      <img
        src={image_3}
        alt="Image 3"
        className="img-fluid"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
      />
    </div>
    <div >
      <img
        src={image_2}
        alt="Image 2"
        className="img-fluid"
        style={{ width: "100%", height: "auto" }} 
        loading="lazy"
      />
    </div>
  </div>
</div>
        </div>
      </SubContainer>
    </Container>
  );
}
