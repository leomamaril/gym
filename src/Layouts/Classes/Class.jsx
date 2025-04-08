import { Container, SubContainer } from "../../Components/ui/container";
import { CLASSES } from '../../data/classes';
export default function Class() {
    return (
        <section className=''>
        <Container variant="transparent">
            <SubContainer>


                    <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {CLASSES.map((item, index) => (
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

                <div className="d-none d-sm-block mt-5">
                    <div className="d-flex gap-3 w-100 justify-content-center">
                        <button className="btn-gymfit-primary text-center px-5 bebas font-btn">SHOW MORE INSTRUCTORS</button>
                    </div>
                </div>
                <div className="d-flex d-sm-none justify-content-center gap-3 mt-5 w-100">
                    <button className="btn-gymfit-primary w-100 font-btn">SHOW MORE INSTRUCTORS</button>
                </div>







            </SubContainer>
        </Container>
    </section>
    );
}