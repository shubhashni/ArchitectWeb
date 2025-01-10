import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect, useRef} from "react";
import Frame from "./components/Frame.js";
// import Spline from '@splinetool/react-spline';
// import Scrollbar from "./components/scrollbar/scrollbar.js";


import AboutPage from "./pages/About.js"
import HomePage  from "./pages/Home.js"
import ContactPage from "./pages/Contact.js"
import FAQPage from "./pages/FAQ.js"
import PortPage from "./pages/Portfolio.js"
import ErrorPage from "./pages/ErrorPage.js"
import ServicesPage from "./pages/Services.js"
import ProjectPage from "./pages/ProjectPage.js"
import Privacy from "./pages/Privacy.js"



import { useAppContext } from "./contexts/Context.js";
import Circle from "./components/Circle/Circle.js"
import ScrollToTop from "./utils/Scroll.js";

import Test from "./pages/Test.jsx"

// import SmoothScrollbar from 'smooth-scrollbar';
// import ScrollTriggerPlugin from './utils/ScrollTriggerPlugin';
// import SoftScrollPlugin from './utils/SoftScrollPlugin';

function App() {
  const { isMobile, setMobileTrue, setMobileFalse } = useAppContext();


  function checkForMobileBg() {
    const width = window.innerWidth;

    if (width > 768 && isMobile) {
      setMobileFalse();
    } else if (width < 768 && !isMobile) setMobileTrue();
  }
  checkForMobileBg();

  useEffect(() => {
    
    checkForMobileBg();

    window.addEventListener("resize", checkForMobileBg);

    return () => window.removeEventListener("resize", checkForMobileBg);
    
  }, [isMobile,setMobileTrue,setMobileFalse]);
  const circleRefs = useRef([]);
  circleRefs.current = [];
  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  
  

  return (
    <BrowserRouter>
      <Frame />
      <ScrollToTop />
      {
        !isMobile?<Circle size="sm" delay="0"/> : null
        
        }
     
      <Routes>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/projects/:id" children={<ProjectPage />} />

        <Route path="/projects/:tag?" exact >
          <Test />
        </Route>

        <Route path="/faq" exact>
          <FAQPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <Route path="/contact" exact>
          <ContactPage />
        </Route>

        <Route path="/services" exact>
          <ServicesPage />
        </Route> 
        <Route path="/privacyandpolicy" exact>
          <Privacy />
        </Route>
      
        
        {/* <Route path="/test" exact>
          <Test />
        </Route>  */}
        
        <Route path="*">
          <ErrorPage />
        </Route>
      </Routes>
      <svg class="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
			<path class="overlay__path" vector-effect="non-scaling-stroke" d="M 0 0 V 0 Q 50 0 100 0 V 0 z" fill="#dcdcdc"></path>
	  	</svg>
 
    </BrowserRouter>
  );
}

export default App;
