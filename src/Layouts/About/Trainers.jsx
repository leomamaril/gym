import { Container, SubContainer } from "../../Components/ui/container";
import { TRAINER, TRAINERS } from '../../data/about';
export default function Trainers() {
    return (
        <section className=''>
            <Container variant="transparent">
                <SubContainer style={{ maxWidth: '1440px' }}>
                    <div className="row justify-content-center text-center g-0 gy-3">
                        <div className="col-12 col-lg-8 d-flex flex-column align-items-center d-none d-sm-block" style={{ width: '40rem' }}>
                            <h1 className="fs-5 bebas line-1  ">{TRAINER.subtitle}</h1>
                            <h1 className="display-4 bebas line-1  text-base">{TRAINER.title}</h1>
                            <p className="fs-6 poppins line-1 " >{TRAINER.body}</p>

                        </div>
                        <div className="col-12 d-flex flex-column align-items-center d-sm-none">
                            <h1 className="fs-5 bebas line-1  ">{TRAINER.subtitle}</h1>
                            <h1 className="display-1 bebas lh-3 text-base " style={{ width: '15rem' }}>{TRAINER.title}</h1>
                            <p className="fs-6 poppins lh-2" style={{ width: '20rem' }}>{TRAINER.body}</p>

                        </div>
                    </div>


                        <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                            {TRAINERS.map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card text-white bg-gray pb-2 h-100">
                                        <img src={item.img} className="card-img-top" style={{ height: "100%" }} alt={item.title} />
                                        <div className="card-body">
                                            <h5 className="fs-4 card-title bebas mt-3 ms-3 text-base">{item.title}</h5>
                                            <p className="small card-text poppins ms-3">{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    
                    <div className="d-none d-sm-block mt-5">
                        <div className="d-flex gap-3 w-100 justify-content-center">
                            <button className="btn-gymfit-primary text-center px-5 bebas ps-5 pe-5">SHOW MORE INSTRUCTORS</button>
                        </div>
                    </div>
                    <div className="d-flex d-sm-none justify-content-center gap-3 mt-5 w-100">
                        <button className="btn-gymfit-primary w-100">SHOW MORE INSTRUCTORS</button>
                    </div>







                </SubContainer>
            </Container>
        </section>
    )

}