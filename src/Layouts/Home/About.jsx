import image_2 from '../../assets/img/image2.png';
import image_3 from '../../assets/img/image3.png';
import { ABOUT, ABOUT_US } from '../../data/home';
import { Container, SubContainer } from '../../Components/ui/container';
export default function About() {
    return (
        <section>
            <Container>
                <SubContainer style={{ maxWidth: '1440px' }}>
                    <div className='container-fluid d-none d-sm-block'>
                        <div className="row justify-content-center mt-5">
                            {ABOUT.map((items, index) => (
                                <div key={index} className="col-6 col-sm-3 mb-4">
                                    <div className="card h-100 border-0 bg-transparent text-white">
                                        <div className="card-body line-sm">
                                            <h1 className="display-4 bebas text-base mb-3">{items.title}</h1>
                                            <p className="fs-6 poppins mb-3">{items.subtitle}</p>
                                            <p className="small poppins mb-0 ">{items.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=' d-block d-sm-none'>
                        <div className="row justify-content-center mt-5">
                            {ABOUT.map((items, index) => (
                                <div key={index} className="col-6 col-sm-3 mb-4">
                                    <div className="card h-100 border-0 bg-transparent text-white">
                                        <div className="card-body">
                                            <h1 className="display-4 bebas text-base mb-3">{items.title}</h1>
                                            <p className="fs-6 poppins mb-3 ">{items.subtitle}</p>
                                            <p className="fs-10 poppins mb-0 ">{items.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-12 col-md-5 order-md-1 order-1">
                            <h1 className="fs-5 bebas">{ABOUT_US.about}</h1>
                            <h1 className="display-5 bebas text-base">{ABOUT_US.title}</h1>
                            <div className="d-flex d-md-none">
                                <img src={image_3} alt="Image 3" className="img-fluid mt-3 w-50" />
                                <div className='mx-3'>
                                    <img src={image_2} alt="Image 2" className="img-fluid mt-3 w-100" />
                                </div>
                            </div>
                            <p className="fs-6 poppins line-2" style={{ maxWidth: '430px' }}>{ABOUT_US.body}</p>
                            <button className="d-none d-md-block btn-gymfit-primary">learn more about us</button>
                            <div className="d-flex d-md-none justify-content-center gap-3 mt-3 w-100">
                                <button className="btn-gymfit-primary w-100">learn more about us</button>
                            </div>
                        </div>
                        <div className="d-none d-md-flex col-12 col-md-7 order-md-2">
                            <div className="d-flex gap-3 w-100 justify-content-end">
                                <div><img src={image_3} alt="Image 3" className="img-fluid w-100 h-auto" /></div>
                                <div><img src={image_2} alt="Image 2" className="img-fluid w-100 h-auto" /></div>
                            </div>
                        </div>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}
