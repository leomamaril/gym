
import { CLASSES_HEADING } from '../../data/classes';
import { Container, SubContainer } from '../../Components/ui/container';
export default function Header() {
    return(
        <Container>
            <SubContainer style={{ maxWidth: '1440px' }}>
                <div className="row mt-5">
                    <div className="col-12 col-md-5 order-md-1 order-1">
                        <h1 className="fs-5 bebas">{CLASSES_HEADING.subtitle}</h1>
                        <h1 className="display-4 bebas text-base">{CLASSES_HEADING.title}</h1>
                        <div className="d-flex d-md-none">
                            <img src={CLASSES_HEADING.image} alt="Image 3" className="img-fluid mt-3 w-50  mb-3" />
                            <div className='mx-3'>
                                <img src={CLASSES_HEADING.image} alt="Image 2" className="img-fluid mt-3 w-100 mb-3" />
                            </div>
                        </div>
                        <p className="fs-6 poppins line-2" >{CLASSES_HEADING.body}</p>


                    </div>
                    <div className="d-none d-md-flex col-12 col-md-7 order-md-2  mb-3">
                        <div className="d-flex gap-5 w-100 justify-content-end">
                            <div><img src={CLASSES_HEADING.image} alt="Image 3" className="img-fluid w-100 h-auto" /></div>

                        </div>
                    </div>
                </div>
            </SubContainer>
        </Container>
    )
}