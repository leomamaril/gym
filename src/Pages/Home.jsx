import About from "../Layouts/Home/About"
import Trainers from "../Layouts/Home/Trainers"
import Classes from "../Layouts/Home/Classes"
import Header from "../Layouts/Home/Header"

import Change from "../Layouts/Home/Change"



export default function Home() {
    return (
        <>

            <Header />
            <About/>
            <Classes/>
            <Trainers/>
            <Change/>

        </>

    )
}