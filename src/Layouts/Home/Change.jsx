import { Container, SubContainer } from "../../Components/ui/container";
import { CHANGE } from '../../data/home';
import { Link } from "react-router-dom";
export default function Change() {
    return (
        <section className=''>
            <Container variant="transparent">
                <SubContainer style={{ maxWidth: '1440px' }}>
                    <div className="row justify-content-center text-center g-0 gy-3 my-4">
                        <div className="col-12 d-flex flex-column align-items-center d-none d-sm-block">
                            <h1 className="font-xl bebas line-1 mb-0 text-base">{CHANGE.title}</h1>
                            <p className="font-nav poppins line-1 mb-0">{CHANGE.body}</p>
                            <div className="d-flex flex-row gap-3 justify-content-center py-5">
                                <Link to='/pricing' className="btn-gymfit-primary font-btn">{CHANGE.btn1}</Link>
                                <Link to='/consultation' className="btn-gymfit-outline font-btn">{CHANGE.btn2}</Link>
                            </div>
                        </div>

                        <div className="col-12 d-flex flex-column align-items-center d-sm-none">
                            <h1 className="font-xl bebas line-1 text-base" >{CHANGE.title}</h1>
                            <p className="font-p poppins line-1" style={{ width: '17rem' }}>{CHANGE.body}</p>
                            <div className="d-flex flex-row w-100 gap-2 py-3">
                                <Link to='/pricing' className="btn-gymfit-primary w-75 font-btn">{CHANGE.btn1}</Link>
                                <Link to='/consultation' className="btn-gymfit-outline w-100 font-btn">{CHANGE.btn2}</Link>
                            </div>
                        </div>
                    </div>
                </SubContainer>
            </Container>
        </section>
    )
}