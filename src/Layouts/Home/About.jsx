import image_2 from '../../assets/img/image2.png';
import image_3 from '../../assets/img/image3.png';
import { ABOUT, ABOUT_US } from '../../data/home';
import { Container, SubContainer } from '../../Components/ui/container';
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
                                            <p className="font-sm lh-1 poppins mb-0 ">{items.body}</p>
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
                                            <p className="font-sm lh-1 poppins mb-0 ">{items.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="row g-0 my-5">
                        <div className="col-12 col-md-5 order-md-1 order-1 d-flex flex-column align-items-start justify-content-center">
                            <h1 className="font-name bebas">{ABOUT_US.about}</h1>
                            <h1 className="font-md bebas text-base">{ABOUT_US.title}</h1>
                            {/* Mobile */}
                            <div className="d-flex d-md-none">
                                <img src={image_3} alt="Image 3" className="img-fluid mt-3 w-50" />
                                <div className='mx-3'>
                                    <img src={image_2} alt="Image 2" className="img-fluid mt-3 w-100" />
                                </div>
                            </div>
                          
                            <p className="font-p justify-content-center poppins line-2 mt-3" style={{ maxWidth: '460px' }}>{ABOUT_US.body}</p>

                        
                            <button className="d-none d-md-block btn-gymfit-primary font-btn">learn more about us</button>
                            {/* Mobile */}
                            <div className="d-flex d-md-none justify-content-center gap-3 mt-3 w-100">
                                <button className="btn-gymfit-primary w-100 font-btn">learn more about us</button>
                            </div>
                        </div>

                        <div className="d-none d-md-flex col-12 col-md-7 order-md-2">
                            <div className="d-flex gap-5 w-100 justify-content-end">
                                <div><img src={image_3} alt="Image 3" className="img-fluid w-auto h-auto" /></div>
                                <div><img src={image_2} alt="Image 2" className="img-fluid w-auto h-auto" /></div>
                            </div>
                        </div>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}
