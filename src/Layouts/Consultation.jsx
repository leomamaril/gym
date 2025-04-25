import { Link } from "react-router-dom"
import { Container, SubContainer } from "../Components/ui/container"
export default function Consultation(){
    return (
        <Container>
        <SubContainer >
            <div>
               <p className="poppins font-sm"><Link to='/home' className="text-base"> Home</Link> | Consultation</p>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-12 col-lg-5 order-md-1 order-1">
                    <h1 className="font-name bebas">book a consultation</h1>
                    <h1 className="font-md bebas text-base">Book a free fitness consulation</h1>               
                    <p className="font-p poppins lh-3" >Not sure where to start? Let us help! Book a  free 1 on 1 consultation with one of our certified trainers to discuss your goals, assess your fitness level, and create a personalized workout plan just for you.</p>
                </div>
                <div className=" col-12 col-md-7 order-md-2 mb-3 order-2">
                <form className="w-100 poppins">
                    <input type="text" className="dark-input form-control" placeholder="Full Name" required/>
                    
                    <input type="email" className="dark-input form-control" placeholder="Email Address" required/>
                    
                    <input type="tel" className="dark-input form-control" placeholder="Phone Number" required/>
                    
                    <input type="date" className="dark-input form-control" placeholder="Preferred Date" required/>
                    
                    <input type="time" className="dark-input form-control" placeholder="Preferred Time" required/>
                    
                    <textarea className="dark-input form-control fixed-textarea" placeholder="Goal or Concern" rows="4" required/>
                    
                    <button type="submit" className="submit-btn mt-3 bebas font-btn">BOOK MY CONSULTATION</button>
                </form>
                </div>
            </div>
        </SubContainer>
    </Container>
    )
}