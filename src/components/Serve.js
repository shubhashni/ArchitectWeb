import React, { useRef, useEffect, useLayoutEffect } from "react";
// import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/appcontext.js";

import { gsap } from "gsap";
// import {images} from '../utils/constans.js'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = ['Interior','Exterior','Rendering','Animation','Virtual Tour']

const Serv = () => {
  const { isMobile } = useAppContext();

  const MainWrapper = useRef(null);
  const mobileLinksScroller = useRef(null);
  const q = gsap.utils.selector(MainWrapper);
  gsap.registerPlugin(ScrollTrigger)

  // const[isScrollStarted,setIsScrollStarted]=useState(!1);useEffect(()=>(isMobile&&mobileLinksScroller.current&&mobileLinksScroller.current.addEventListener("scroll",checkLinksScroll),()=>{mobileLinksScroller.current&&mobileLinksScroller.current.removeEventListener("scroll",checkLinksScroll)}),[isMobile,isScrollStarted]);const checkLinksScroll=e=>{const{scrollLeft:l,offsetWidth:t,scrollWidth:r}=e.target;Number(l/(r-t)).toFixed(2)>.04?isScrollStarted&&(setIsScrollStarted(!1),toggleFader(!0)):isScrollStarted||(setIsScrollStarted(!0),toggleFader(!1))},toggleFader=e=>{const l=gsap.utils.selector(MainWrapper),t=gsap.timeline({defaults:{duration:.5}}),r=l(".mobile-fade.fade-right");e?t.to(r,{x:50,autoAlpha:0}):t.to(r,{x:0,autoAlpha:1})};
 
  useLayoutEffect(() => {
    const fadeElems=q("h6, h3 div, .links-wrapper .links");
    gsap.set(fadeElems, {
      autoAlpha:0,
    })
    gsap.set(fadeElems,{
      y:70,
    })
  }, [isMobile])
  useEffect(()=>{
    const he6 = q(".h2 h6")
    const he3 = q(".h2 h3 div")
    const links = q(".h2 .links")
    const fadeElems=q("h6, h3 div, .links button");
    gsap.to([he6, he3, links],{
      autoAlpha:1,
      stagger: .08,
      duration:1.5,
      delay:.34,
      ease: 'power2',
      // onComplete:()=>ScrollTrigger.refresh(true),
    })
    gsap.to([he6, he3, links],{
      yPercent:0,
      y:0,
      stagger: .08,
      duration:.8,
      delay:.34,
      ease: 'power2',
      // onComplete:()=>ScrollTrigger.refresh(true),
    })
    // gsap.to(q(".links-wrapper button"), {
    //   autoAlpha:1,
    //   duration:.8,
    //   delay:.6,
    //   ease: 'power2',
    //   // onComplete:()=>ScrollTrigger.refresh(true),
    // })
    // gsap.to(q(".links-wrapper button"), {
    //   yPercent:0,
    //   duration:.6,
    //   delay:.6,
    //   ease: 'power2',
    //   // onComplete:()=>ScrollTrigger.refresh(true),
    // })

  },[isMobile])

  const scrollToService = (idx) => {

    if( isMobile ) {
      const findServ = document.querySelector(`.mobile-showcase-box.box-${idx}`)
      const top = findServ.offsetTop

      window.scrollTo({
        top: top - 120,
        left: 0,
        behavior: 'smooth'
      })
    } else {

      // Services ScrollTo In Web
      // const findServ = document.querySelector(`.serv-showcase-box.box-${idx}`)
      // const top = findServ.offsetTop

      // scrollY(top)
    }
    
  }

  return (
    <main ref={MainWrapper}>
      <section className="head services">
        <div className="h2">
          <h6>Services</h6>
           {isMobile &&  <h3>
              <div>From concept design to design developments and CGI visualization, we've got everything covered.</div>
            </h3>}
            {!isMobile && <h3>
              <div>From concept design to design</div><div> developments and CGI visualization,</div><div> we've got everything covered.</div>
            </h3>
            }
          
          <div className="links-wrapper">
            <div className="links" ref={mobileLinksScroller}>
              <div className="mobile-little-fade left-little-fade"></div>

              {
                services.map( (serv,idx) =>
                  <button onClick={ () => scrollToService(idx) } >
                    {serv}
                  </button>
                )
              }
              {/* <button className="">Exterior</button>
              <button className="">Rendering</button>
              <button className="">Animation</button>
              <button className="">Virtual Tour</button> */}

              {/* <div className="mobile-fade fade-right"></div> */}
              <div className="mobile-little-fade right-little-fade"></div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
};
export default Serv;
