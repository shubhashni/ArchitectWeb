import React, { lazy, Suspense, useEffect, useRef,useState } from 'react'
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
// import Con from'../components/contact.js'
import gsap from 'gsap'
import useLoco from '../utils/useLoco.js'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "../components/footer.scss";
import whats from "../assets/whs.svg";
import be from "../assets/be.svg";
import up from "../assets/up.svg";
import insta from "../assets/insta.svg";
import tele from "../assets/telegram.svg";
import {Link} from "react-router-dom"
import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
import Helmet from 'react-helmet';
const Con = lazy( () => import('../components/contact.js'))

// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger)
const ContactPage = () => {
  const { isMobile, setReset,transition,changePT , setVid,setLoading } = useAppContext();
  useLoco(!isMobile, true);
  const el = useRef();
  const q = gsap.utils.selector(el);
  const [ini,setinit] = useState(true)
  useEffect(()=>{
       setTimeout(() => {
         setReset()
       }, 500);
       changePT("Contact")
  },[])

  useEffect(()=>{
    if (ini) {
      setinit(false)
    } else {
    const elems = q(".sec-form h6, .tabs-holder,form")
    // const he3 = q(".h2 h3")
    // const links = q(".h2 button")
    
    gsap.to(elems,{
      y:-200,
      stagger: .03,
      duration:.65,
      ease: 'power2.in',
    })
  }
  },[transition])
  useEffect(()=>{
    setLoading("loading");
    changePT("other")
    setVid("vid")
  },[])
  return (
  <div id="viewport" ref={el} data-scroll-container >
    <Helmet>
      <title>Contact | AM-ARC</title>
      <meta name="description" content="Get in touch with us" />
    </Helmet>
    <div className="contact-page" id="fixed-target" >
      <div className="backLayer" data-scroll data-scroll-sticky data-scroll-target="#fixed-target"></div>
      
      <Suspense fallback={<Loading/> } >
        <Con conn={false}/>
     
      </Suspense>

    </div>
    </div>
  )
}

export default ContactPage
