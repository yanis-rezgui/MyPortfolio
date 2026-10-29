import  { memo } from "react"
import Hero from "../Components/HomeComponents/Hero";
import Projects from "../Components/HomeComponents/Projects";
import About from "../Components/HomeComponents/About";
import Experiences from "../Components/HomeComponents/Experiences";
import Services from "../Components/HomeComponents/Services";
import Process from "../Components/HomeComponents/Process";


const Home = () => {

    return(
        <main className="w-full">
           <Hero/>
           <Projects/>
           <About/>
           <Experiences/>
           <Services/>
           <Process/>
        </main>
    )
}

export default memo(Home);