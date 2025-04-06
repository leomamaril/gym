import { Container, SubContainer } from "../../Components/ui/container";
import { CHANGE } from '../../data/home';
export default function Change() {
    return (
        <section className=''>
            <Container variant="transparent">
                <SubContainer style={{ maxWidth: '1440px' }}>
                    <div className="row justify-content-center text-center g-0 gy-3">
                        <div className="col-12 col-lg-8 d-flex flex-column align-items-center d-none d-sm-block">
                            <h1 className="display-2 bebas line-1 mb-0 text-base">{CHANGE.title}</h1>
                            <p className="fs-6 poppins line-1 mb-0">{CHANGE.body}</p>
                            <div className="d-flex flex-row gap-3 justify-content-center py-3">
                                <button className="btn-gymfit-primary">{CHANGE.btn1}</button>
                                <button className="btn-gymfit-outline">{CHANGE.btn2}</button>
                            </div>
                        </div>
                        <div className="col-12 d-flex flex-column align-items-center d-sm-none">
                            <h1 className="display-4 bebas line-1 text-base" style={{ width: '18rem' }}>{CHANGE.title}</h1>
                            <p className="fs-6 poppins line-1" style={{ width: '17rem' }}>{CHANGE.body}</p>
                            <div className="d-flex flex-row w-100 gap-2 py-3">
                                <button className="btn-gymfit-primary w-100 light">{CHANGE.btn1}</button>
                                <button className="btn-gymfit-outline w-100 light">{CHANGE.btn2}</button>
                            </div>
                        </div>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}