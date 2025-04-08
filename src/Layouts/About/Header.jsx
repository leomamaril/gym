import image_2 from '../../assets/img/image2.png';
import image_3 from '../../assets/img/image3.png';
import { ABOUT_HEADER } from '../../data/about';
import { Container, SubContainer } from '../../Components/ui/container';
import { useEffect, useState } from 'react';


export default function Header() {
     const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const calculateParallax = (offset) => `translateY(${scrollPosition * offset}px)`;
    return (
        <Container>
            <SubContainer>
                <div className="row mt-5">
                    <div className="col-12 col-md-5 order-md-1 order-1">
                        <h1 className="font-name bebas">{ABOUT_HEADER.about}</h1>
                        <h1 className="font-md bebas text-base">{ABOUT_HEADER.title}</h1>
                        <div className="d-flex d-md-none">
                            <img src={image_3} alt="Image 3" className="img-fluid mt-3 w-50  mb-3" />
                            <div className='mx-3'>
                                <img src={image_2} alt="Image 2" className="img-fluid mt-3 w-100 mb-3" />
                            </div>
                        </div>
                        <p className="font-p poppins lh-2" >{ABOUT_HEADER.body1}</p>
                        <p className="font-p poppins lh-2" >{ABOUT_HEADER.body2}</p>
                        <p className="font-p poppins lh-2" >{ABOUT_HEADER.body3}</p>

                    </div>
                    <div className="d-none d-md-flex col-12 col-md-7 order-md-2  mb-3 ">
                        <div className="d-flex gap-5 w-100 justify-content-end " >
                            <div><img src={image_3} alt="Image 3"
                            style={{ transform: calculateParallax(0.5), transition: 'transform 0.1s ease-out' }} className="img-fluid w-100 h-auto" /></div>
                            <div><img src={image_2} alt="Image 2"
                            style={{ transform: calculateParallax(0.5), transition: 'transform 0.1s ease-out' }} className="img-fluid w-100 h-auto" /></div>
                        </div>
                    </div>
                </div>
            </SubContainer>
        </Container>
    )
}