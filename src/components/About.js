import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./about.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/covers/about/01.jpg";
import img2 from "../assets/covers/about/08.jpg";
import imgMB from "../assets/aboutmb.jpg";

import { useAppContext } from "../contexts/appcontext";
const About = () => {
  const el = useRef();
  const myTl = useRef();
  const imgTl = useRef();

  gsap.registerPlugin(ScrollTrigger);
const {isMobile} = useAppContext();
  const q = gsap.utils.selector(el);
  

  return (
    <div  style={{ position: "relative" }} id="stick">
      {/* <div style={{ height: "81vh" }}></div> */}
      <div className="texts-wrap" data-scroll data-scroll-sticky data-scroll-target="#stick">
        <div className="darkLayer"></div>
        {isMobile && 
        <div className="mb">
          <p>About</p> 
        </div> }
        
       { isMobile && <h2 >
        <div> We help people feel good in a space.</div>
        </h2>}

        { !isMobile &&<h2 >
        <div> We help people feel</div><div> good in a space.</div>
        </h2>}
       
        
        
        <h5 >
          A team of expert architects and designers who create cozy, modern, and
          minimalist spaces.
        </h5>
      </div>
      <div className="image-wrap fc">
        <img src={img1} />
      </div>
      <div className="members-wrap">
        <div className="mem-row">
          <div className="members first"></div>
          <div className="members sec"></div>
          {!isMobile?<div className="members thir"></div> : null }
          
        </div>
        <div className="mem-row">
          <div className="members fou"></div>
          <div className="members fif"></div>
          {!isMobile?<div className="members six"></div> : null }
        </div>
      </div>
      <div className="text-wrap2">
        <h5>
          For each of our clients, we create spaces that are truly unique to
          them by listening, solving problems, and being creative.
        </h5>
      </div>
      <div className="image-wrap so">
        <img src={img2} id="im" />
      </div>
      <div className="phil-con">
        <div className="phil">
          <p >
           <span>Philosophy</span> Less is more
         </p>
        </div>

        <div className="phil">
         <p >
            Worldwide,{isMobile&& <br/>} we work with
          </p>
        </div>

      </div>
    </div>
  );
};
export default About;
