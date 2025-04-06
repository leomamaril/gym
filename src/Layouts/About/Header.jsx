import image_2 from '../../assets/img/image2.png';
import image_3 from '../../assets/img/image3.png';
import { ABOUT_HEADER } from '../../data/about';
import { Container, SubContainer } from '../../Components/ui/container';

export default function Header() {
    return (
        <Container>
            <SubContainer style={{ maxWidth: '1440px' }}>
                <div className="row mt-5">
                    <div className="col-12 col-md-5 order-md-1 order-1">
                        <h1 className="fs-5 bebas">{ABOUT_HEADER.about}</h1>
                        <h1 className="display-4 bebas text-base">{ABOUT_HEADER.title}</h1>
                        <div className="d-flex d-md-none">
                            <img src={image_3} alt="Image 3" className="img-fluid mt-3 w-50  mb-3" />
                            <div className='mx-3'>
                                <img src={image_2} alt="Image 2" className="img-fluid mt-3 w-100 mb-3" />
                            </div>
                        </div>
                        <p className="fs-6 poppins line-2" >{ABOUT_HEADER.body1}</p>
                        <p className="fs-6 poppins line-2" >{ABOUT_HEADER.body2}</p>
                        <p className="fs-6 poppins line-2" >{ABOUT_HEADER.body3}</p>

                    </div>
                    <div className="d-none d-md-flex col-12 col-md-7 order-md-2  mb-3">
                        <div className="d-flex gap-5 w-100 justify-content-end">
                            <div><img src={image_3} alt="Image 3" className="img-fluid w-100 h-auto" /></div>
                            <div><img src={image_2} alt="Image 2" className="img-fluid w-100 h-auto" /></div>
                        </div>
                    </div>
                </div>
            </SubContainer>
        </Container>
    )
}