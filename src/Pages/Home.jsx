import About from "../Layouts/Home/About"
import Trainers from "../Layouts/Home/Trainers"
import Carousel from "../Layouts/Home/Carousel"
import Header from "../Layouts/Home/Header"

import Change from "../Layouts/Home/Change"



export default function Home() {
    return (
        <>

            <Header />
            <About/>
            <Carousel/>
            <Trainers/>
            <Change/>

        </>

    )
}