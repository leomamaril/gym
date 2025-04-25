import logo from "../assets/img/logo_2.png";
import { Container, SubContainer } from "../Components/ui/container";
import NavbarLink from "../Components/ui/NavFooter";
import { FOOTER } from '../data/home';
export default function Footer() {
    return (
        <section>
            <Container variant="primary">
                <SubContainer >
                    <div className="row align-items-center mb-4">
                        {/* Large screens (lg+) - Original side-by-side layout */}
                        <div className="col-md-6 d-none d-md-block">
                            <img src={logo} alt="Gymfit" className="img-fluid d-block" style={{ width: '15rem' }} />
                        </div>
                        <div className="col-md-6 d-none d-md-block text-start">
                            <p className="font-p poppins">{FOOTER.title}</p>
                        </div>
                        {/* Medium screens (md) - Centered stacked layout */}
                        <div className="col-12 d-md-none d-lg-none text-center">
                            <img src={logo} alt="Gymfit" className="img-fluid mb-3" style={{ width: '40vw' }} />
                            <p className="font-p poppins mx-auto" style={{ maxWidth: '25rem' }}>
                                {FOOTER.title}
                            </p>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-5">
                            <h1 className="font-name bebas">Quick Links</h1>
                            <div className="navbar-collapse" id="navbarNav">
                                <div className="d-none d-md-block fw-light">
                                    <ul className="navbar-nav flex-row gap-4">
                                        <NavbarLink target="home" href="/home" text="Home" />
                                        <NavbarLink target="about" href="/About" text="About Us" />
                                        <NavbarLink target="services" href="/Classes" text="Classes" />
                                        <NavbarLink target="contact" href="/Pricing" text="Pricing Plan" />
                                    </ul>
                                </div>

                                <div className="col-12 d-block d-md-none d-lg-none fw-light">
                                    <div className="row">
                                        <div className="col-6 ">
                                            <ul className="navbar-nav">
                                                <NavbarLink target="home" href="/home" text="Home" />
                                                <NavbarLink target="about" href="/About" text="About Us" />
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="navbar-nav">
                                                <NavbarLink target="services" href="/Classes" text="Classes" />
                                                <NavbarLink target="contact" href="/Pricing" text="Pricing Plan" />
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-1 d-flex justify-content-center">
                            <div style={{ borderLeft: '1px solid #ccc', height: '100%' }}></div>
                        </div>


                        <div className="col-6">
                            <h1 className="font-name bebas">follow us on our social medias</h1>
                            <div className="d-flex gap-3 ">
                                <span><i className="bi bi-facebook"></i></span>
                                <span><i className="bi bi-instagram"></i></span>
                                <span><i className="bi bi-twitter-x"></i></span>
                            </div>
                        </div>
                    </div>
                </SubContainer>
            </Container>
        </section>
    );
}