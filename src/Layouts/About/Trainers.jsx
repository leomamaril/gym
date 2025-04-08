import { Container, SubContainer } from "../../Components/ui/container";
import { TRAINER, TRAINERS } from '../../data/about';
export default function Trainers() {
    return (
        <section className=''>
            <Container variant="transparent">
                <SubContainer>
                    <div className="row justify-content-center text-center g-0 gy-3">
                        <div className="col-12 col-lg-8 d-flex flex-column align-items-center d-none d-sm-block" style={{ width: '40rem' }}>
                            <h1 className="font-name bebas line-1  ">{TRAINER.subtitle}</h1>
                            <h1 className="font-md bebas line-1  text-base">{TRAINER.title}</h1>
                            <p className="font-p poppins line-1 " >{TRAINER.body}</p>

                        </div>
                        <div className="col-12 d-flex flex-column align-items-center d-sm-none">
                            <h1 className="font-name bebas line-1  ">{TRAINER.subtitle}</h1>
                            <h1 className="font-md bebas lh-3 text-base " style={{ width: '15rem' }}>{TRAINER.title}</h1>
                            <p className="font-p poppins lh-2" style={{ width: '20rem' }}>{TRAINER.body}</p>

                        </div>
                    </div>


                        <div className="row  row-cols-2 row-cols-sm-2 row-cols-md-3 g-4 my-2">
                            {TRAINERS.map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card text-white bg-gray pb-2 h-100">
                                        <img src={item.img} className="card-img-top" style={{ height: "100%" }} alt={item.title} />
                                        <div className="card-body">
                                            <h5 className="font-name card-title bebas mt-3 ms-3 text-base">{item.title}</h5>
                                            <p className="font-p card-text poppins ms-3">{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    
                    <div className="d-none d-sm-block my-5">
                        <div className="d-flex gap-3 w-100 justify-content-center">
                            <button className="btn-gymfit-primary text-center px-5 bebas font-btn">SHOW MORE INSTRUCTORS</button>
                        </div>
                    </div>
                    <div className="d-flex d-sm-none justify-content-center gap-3 my-5 w-100 ">
                        <button className="btn-gymfit-primary w-100 font-btn">SHOW MORE INSTRUCTORS</button>
                    </div>







                </SubContainer>
            </Container>
        </section>
    )

}