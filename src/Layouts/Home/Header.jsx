import image_1 from '../../assets/img/image1.png';
import image_2 from '../../assets/img/image.png';
import { GYM_HEADER } from '../../data/home';
import { Container, SubContainer } from '../../Components/ui/container';
export default function Header() {
    return (
        <section className=''>
            <Container variant="primary">
                <SubContainer >
                    <div className="row align-items-end justify-content-between g-0 gy-3">
                        <div className="col-10 col-sm-9  col-md-8  order-1">
                            <h1 className="display-1 bebas line-1 mb-0" style={{ maxWidth: "620px" }}>{GYM_HEADER.title}</h1>
                        </div>
                        <div className="col-12 col-md-4 d-none d-lg-block order-2 order-md-2 text-md-end mb-3 mb-md-0">
                            <div className="d-flex flex-md-row flex-column gap-3 justify-content-end">
                                <button className="btn-gymfit-primary ">Be a Member</button>
                                <button className="btn-gymfit-outline">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-3 order-1">
                            <div className="d-block d-lg-none mb-3">
                                <img src={image_2} alt="Image 2" className="img-fluid w-100" />
                            </div>
                            <div className='col-7 col-lg-12'>
                                <img src={image_1} alt="Image 1" className="img-fluid" />
                            </div>
                            <p className='mt-4 line-2 fs-6'>{GYM_HEADER.body}</p>
                            <div className="d-flex d-lg-none justify-content-center gap-3 mt-3 w-100">
                                <button className="btn-gymfit-primary w-100">Be a Member</button>
                                <button className="btn-gymfit-outline w-100">Learn More</button>
                            </div>
                        </div>
                        <div className="col d-none d-lg-block order-2">
                            <img src={image_2} alt="Image 2" className="img-fluid w-100" />
                        </div>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}