
import { Link } from "react-router-dom";
import { Container, SubContainer } from "../Components/ui/container";
export default function Contact(){
    return(
        <Container>
        <SubContainer >
            <div>
               <p className="poppins font-sm"><Link to='/home' className="text-base"> Home</Link> | Contact Us</p>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-12 col-lg-5 order-md-1 order-1">
                    <h1 className="font-name bebas">Contact Us</h1>
                    <h1 className="font-md bebas text-base">Get in Touch with us</h1>               
                    <p className="font-p poppins lh-3" >Have questions about our classes, memberships, or personal training programs? We're here to help! Whether you're a beginner looking to start your fitness journey or a seasoned athlete seeking new challenges, the Gym Fit team is ready to support you every step of the way.</p>
                    <p className="font-p poppins "><i class="bi bi-envelope"></i> <a href="mailto:gymfit@gmail.com.ph" className="text-white">gymfit@gmail.com.ph</a> </p>
                    <p className="font-p poppins"><i class="bi bi-telephone"></i><a href="tel:+ 63 9123 456 789" className="text-white"> + 63 9123 456 789</a></p>
                    <p className="font-p poppins"><i class="bi bi-geo-alt"></i> #123 2nd Building, Dagupan City, Pangasinan, Philippines</p>
                </div>
                <div className=" col-12 col-md-7 order-md-2 mb-3 order-2">
                <form className="w-100 poppins">
                    <input type="text" className="dark-input form-control" placeholder="Full Name" required/>
                    
                    <input type="email" className="dark-input form-control" placeholder="Email Address" required/>
                    
                    <input type="tel" className="dark-input form-control" placeholder="Phone Number" required/>
                    
                    <input type="text" className="dark-input form-control" placeholder="Subject" required/>
                
                    <textarea className="dark-input form-control fixed-textarea " placeholder="Write your message here" rows="4" required/>
                    
                    <button type="submit" className="submit-btn mt-3 bebas font-btn">BOOK MY CONSULTATION</button>
                </form>
                </div>
            </div>
        </SubContainer>
    </Container>
    )
}