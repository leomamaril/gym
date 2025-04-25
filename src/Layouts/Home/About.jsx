import image_2 from '../../assets/img/image2.png';
import image_3 from '../../assets/img/image3.png';
import { ABOUT, ABOUT_US } from '../../data/home';
import { Container, SubContainer } from '../../Components/ui/container';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section>
            <Container>
                <SubContainer>
                    <div className='container-fluid d-none d-md-block'>
                        <div className="row justify-content-center mt-5">
                            {ABOUT.map((items, index) => (
                                <div key={index} className="col-6 col-sm-3 mb-4">
                                    <div className="card h-100 border-0 bg-transparent text-white">
                                        <div className="card-body line-sm">
                                            <h1 className="font-lg bebas text-base mb-2">{items.title}</h1>
                                            <p className="font-pp poppins lh-1 mb-1">{items.subtitle}</p>
                                            <p className="font-sm lh-1 poppins mb-0 fw-light">{items.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                         {/* Mobile */}
                    <div className=' d-block d-md-none'>
                        <div className="row justify-content-center mt-5">
                            {ABOUT.map((items, index) => (
                                <div key={index} className="col-6 col-sm-3 mb-4">
                                    <div className="card h-100 border-0 bg-transparent text-white">
                                        <div className="card-body">
                                            <h1 className="font-lg bebas text-base mb-2">{items.title}</h1>
                                            <p className="font-pp poppins lh-1 mb-1">{items.subtitle}</p>
                                            <p className="font-sm lh-1 poppins mb-0 fw-light">{items.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="row g-0 my-5">
                        <div className="col-12 col-md-6 order-md-1 order-1 d-flex flex-column align-items-start justify-content-center">
                            <h1 className="font-name bebas">{ABOUT_US.about}</h1>
                            <h1 className="font-md bebas text-base">{ABOUT_US.title}</h1>
                            {/* Mobile */}
                            <div className="d-flex d-md-none">
                                <img src={image_3} alt="Image 3" className="img-fluid mt-3 w-50" />
                                <div className='mx-3'>
                                    <img src={image_2} alt="Image 2" className="img-fluid mt-3 w-100" />
                                </div>
                            </div>
                          
                            <div className="d-none d-md-flex gap-3 w-100">
                            <p className="font-p justify-content-center poppins line-2" style={{maxWidth:'470px'}}>{ABOUT_US.body}</p>

                                </div>
                            <div className="d-flex d-md-none gap-3 w-100">
                                <p className="font-p justify-content-center poppins mt-3 line-2" >{ABOUT_US.body}</p>
                            </div>
                        
                            <Link to='/about' className="d-none d-md-block btn-gymfit-primary font-btn mt-3 text-center">learn more about us</Link>
                            {/* Mobile */}
                            <div className="d-flex d-md-none justify-content-center gap-3 mt-3 w-100">
                                <Link to='/about' className="btn-gymfit-primary w-100 font-btn  text-center">learn more about us</Link>
                            </div>
                        </div>

                        <div className="d-none d-md-flex col-12 col-md-6 order-md-2">
                            <div className="d-flex gap-4 w-100 justify-content-end">
                                <div><img src={image_3} alt="Image 3" className="img-fluid w-auto h-auto" /></div>
                                <div><img src={image_2} alt="Image 2" className="img-fluid w-auto h-auto mt-3" /></div>
                            </div>
                        </div>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}
