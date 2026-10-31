import  { memo } from "react"
import Hero from "../Components/HomeComponents/Hero";
import Projects from "../Components/HomeComponents/Projects";
import About from "../Components/HomeComponents/About";
import Experiences from "../Components/HomeComponents/Experiences";
import Services from "../Components/HomeComponents/Services";
import Process from "../Components/HomeComponents/Process";
import Education from "../Components/HomeComponents/Education";
import Skills from "../Components/HomeComponents/Skills";
import Contact from "../Components/HomeComponents/Contact";
import Testimonials from "../Components/HomeComponents/Testimonials";
import Footer from "../Components/HomeComponents/Footer";


const Home = () => {

    return(
        <main className="w-full">
           <Hero/>
           <Projects/>
           <About/>
           <Experiences/>
           <Education/>
           <Services/>
           <Process/>
           <Skills/>
           <Testimonials/>
           <Contact/>
           <Footer/>
        </main>
    )
}

export default memo(Home);