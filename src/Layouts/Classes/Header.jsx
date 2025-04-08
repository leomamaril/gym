
import { CLASSES_HEADING } from '../../data/classes';
import { Container, SubContainer } from '../../Components/ui/container';
export default function Header() {
    return(
        <Container>
            <SubContainer >
                <div className="row mt-5">
                    <div className="col-12 col-md-12 col-lg-5 order-md-1 order-1">
                        <h1 className="font-name bebas">{CLASSES_HEADING.subtitle}</h1>
                        <h1 className="font-md bebas text-base">{CLASSES_HEADING.title}</h1>
                        <div className="d-flex d-lg-none col-12">
                            <img src={CLASSES_HEADING.image} alt="Image 3" className="img-fluid mt-3 w-100 mb-3" />
                            
                        </div>
                        <p className="font-p poppins lh-3" >{CLASSES_HEADING.body}</p>


                    </div>
                    <div className="d-none d-lg-flex col-12 col-md-7 order-md-2  mb-3">
                        <div className="d-flex gap-5 w-100 justify-content-end">
                            <div><img src={CLASSES_HEADING.image} alt="Image 3" className="img-fluid w-100 h-auto" /></div>

                        </div>
                    </div>
                </div>
            </SubContainer>
        </Container>
    )
}