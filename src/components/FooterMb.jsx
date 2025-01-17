import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import whats from "../assets/whs.svg";
import be from "../assets/be.svg";
import up from "../assets/up.svg";
import insta from "../assets/insta.svg";
import tele from "../assets/telegram.svg";
import { useAppContext } from "../contexts/appcontext.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FooterMb = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const myTl = useRef();
  const {changePp} = useAppContext();

  const btnmove = (e) => {
    const q = gsap.utils.selector(el);
    const btnArea = q(".cobtn-contain");
    const {target}= e;
    const ofTop = target.getBoundingClientRect().top;
      const ofLeft = target.getBoundingClientRect().left;
      var s = e.clientX - ofLeft;
      var o = (e.clientY - ofTop)/e.target.getBoundingClientRect().height;
      // console.log(o, e.target.getBoundingClientRect().height)
      console.log(e.target)
    gsap.to(e.target, {
      x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 40,
      y:( o - .5) * 20,
      ease: "Power3.inOut",
      duration: .3,
    });

  };
  const btnL = (e)=>{
    const btnArea = q(".cobtn-contain");

    gsap.to(e.target, {
      x: 0,
      y:0,
      ease: "Power3.inOut",
      duration: .3,
    });
  }
  useEffect(() => {
    const bc = q(".backgr");
    const footer = q(".footer-foot h5");
      gsap.set(q(".backgr"), {
        autoAlpha:0,
      });
      const changeBg = (direction)=>{
        console.log(direction)
        gsap.to(q(".backgr"), { 
          autoAlpha: ()=> (direction === 1? 1: 0),
          duration:1
        })
        direction === 1? changePp("Contact"): changePp("other")
      }
      const prt1 =q(".footer-main h6");
      const prt2 = q(".tabs-holder");
      const prt3 = q(".footer-foot");
      gsap.set(q(".trig"), {
        autoAlpha:0,
        // yPercent:60,
      })
   
  }, []);
  return (
    <section ref={el}  id="bab"   className="sec-form footer-sec fot" >
      <div className="trig">
        <div className="backgr" data-scroll data-scroll-sticky data-scroll-target="#bab"></div>
        <div className="footer-main">
          <h6>
            We are always <br />
            <span>
              happy to <p>help</p>
            </span>
          </h6>

        </div>
        <div className="footer-foot">
          <div className="footer-secs l">
            <h5>am@am-arc.com</h5>
            <p>Mechnykova St, 2, Kyiv, 02000</p>
            <Link to="/privacyandpolicy">
            <p>Privacy Policy</p>
            </Link>
          </div>
          <div className="footer-secs r">
          <Link className="co-btn co-white" to="/contact">
          Estimate project
              </Link>
            <div>
            <div>
              <a href="https://www.upwork.com/fl/am1amirmohseni" target="_blank"><img className="up" src={up} /></a>
              <a href="https://www.behance.net/am-arc" target="_blank"><img className="be" src={be} /></a>
              <a href="https://t.me/am_arc_com" target="_blank"><img className="tele" src={tele} /></a>
              <a href="https://www.instagram.com/am__arc/?hl=en" target="_blank"><img className="insta" src={insta} /></a>
              <a href="https://api.whatsapp.com/send?phone=380970006043" target="_blank"> <img className="whats" src={whats} /></a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default FooterMb;
