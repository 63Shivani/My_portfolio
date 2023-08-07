// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(()=>{
     Aos.init({
      duration:1800,
      offset:100,
     })
  },[])
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <Skills />
      <Projects />
      <Hireme />
      <Contact />
      <footer className="py-3 text-center">
        <h6 className="mb-3">SHIVANI KUMARI</h6>
        <p>pritykumari © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
