import gsap from 'gsap/all'
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import Con from'../components/contact.js'
// import Serv from'../components/serv.js'
// import Showcase from '../components/showcase.js'
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco.js'
import {servData} from '../utils/constans.js'
import TestingCompo from '../components/testcompo.js'
import { useAppContext } from "../contexts/appcontext.js";
import Serv from '../components/serv.js'
import Helmet from 'react-helmet'


// const Serv = lazy( () => import('../components/serv.js'))
const ShowcaseServ = lazy( () => import('../components/serShc.js'))
const Con = lazy( () => import('../components/contact.js'))
const Footer = lazy( () => import('../components/footer.js'))
const FooterMB = lazy( () => import('../components/footermb.jsx'))

// const Loading = lazy( () => import('./Loading.js'))

const ServicesPage = () => {
  const imageTimeline = useRef()
  const sl = useRef();
  const q = gsap.utils.selector(sl);
  const fooT= useRef();
  const tl = useRef();
  const imgPara = useRef();
  const [init, setinit] = useState(true);
  gsap.registerPlugin(ScrollTrigger);
  const { resetLoco, setReset, changePp, isMobile, setLoading, changePT,setVid, transition } = useAppContext();
  useLoco(!isMobile)
  
  useEffect(() => {
    setTimeout(() => {
      setReset()
    }, 500);
   
    return ()=>{
    }
  }, [isMobile])

  useEffect(()=>{
    if (init) {
      setinit(false)
    } else {
    const he6 = q(".h2 h6")
    const he3 = q(".h2 h3 div")
    const links = q(".h2 button")
    
    gsap.to([he6, he3, links],{
      y:-200,
      stagger: .05,
      duration:.68,
      ease: 'power2.in',
    })
  }
  },[transition])
 
  useEffect(()=>{
    setLoading("loading");
  changePT("other")
  setVid("vid")


    const imgTrigger = q(".show-images");
    const imageArrayfull = q(".show-image");
    const imagewrap = q(".show-img-contain");
    const endTr = q(".show-text-contain");
    const changeBg = (direction)=>{
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (direction === 1? 1: 0),
        duration:1
      })
      direction === 1? changePp("Contact"): changePp("other")
    }
    
if(!isMobile){


    gsap.set(imageArrayfull, {
      zIndex: (i, target, targets) => targets.length - i,
    });
    changePp("other")

    const images = q(".show-image:not(.end)");
    const allImgs = q(".show-image");
    images.forEach((image, i) => {
      const nextImage = image.nextElementSibling;

       imageTimeline.current = gsap.timeline({
        scrollTrigger: {
          scroller:"[data-scroll-container]",
          trigger: imgTrigger,
          start: () => "top -" + window.innerHeight * i,
          endTrigger: endTr,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          id:"repeat"+ i,
          // invalidateOnRefresh: true,
          // markers:true,
         
        },
      })

      .fromTo(
        image,
        {
          clipPath:()=> "inset(0px 0px 0px 0px)",
          backgroundPosition: () => "0 50%",
        },
        {
          clipPath:()=> "inset(0px 0px 100% 0px)",
          backgroundPosition: () => "0 65%",
          ease: "none",
        },
        0
      )
  

      .fromTo(
        allImgs[i+1],
        {
          backgroundPosition: () => "0 35%",

        },
        {
          backgroundPosition: () => "0 50%",
          ease: "none",
        },
        0
      );
    });

    ScrollTrigger.create({
      scroller:"[data-scroll-container]",
      trigger: imagewrap,
      start: () => "center center",
      endTrigger: endTr,
      end: () => "bottom bottom",
      pin: imagewrap,
      id: "pinSc",
      // onEnter: ()=> console.log("pinning showcase"),
      pin: imagewrap,
    pinReparent: true,
    anticipatePin:1,
    invalidateOnRefresh: true,
      // markers:true,
    });

    
    fooT.current = gsap
    .timeline({
        // duration:10,
        
      scrollTrigger: {
        scroller: "#viewport",
        trigger: q(".footer-sec.fot"),
        start:()=> "center-=8% center-=8%",
        end: ()=> "bottom bottom",
        // markers: true,
        id:"foot",
    //     // scrub:true,
        onLeaveBack: ({direction})=> changeBg(direction),
      onEnter: ({direction})=> changeBg(direction),
      },
    })
       .to(q(".trig"),{
         autoAlpha:1,
        //  stagger: {
        //   amount: 0.3,
        //   ease: "power2.Out",
        // },
         duration:1,
       }, "<")

       return()=>{
        fooT.current.kill()
        if( fooT.current.ScrollTrigger){
          fooT.current.ScrollTrigger.kill();
        }
        if(ScrollTrigger.getById("pinSc")){
          ScrollTrigger.getById("pinSc").kill()
        }
        if(ScrollTrigger.getById("repeat0")){
          ScrollTrigger.getById("repeat0").kill()
        }
        if(ScrollTrigger.getById("repeat1")){
          ScrollTrigger.getById("repeat1").kill()
        }
        if(ScrollTrigger.getById("repeat2")){
          ScrollTrigger.getById("repeat2").kill()
        }
        if(ScrollTrigger.getById("repeat3")){
          ScrollTrigger.getById("repeat3").kill()
        }
        if(ScrollTrigger.getById("repeat4")){
          ScrollTrigger.getById("repeat4").kill()
        }
       }
      } else if( isMobile){
        sl.current.style.transform="none";
        gsap.set(sl.current,{
          clearProps: "transform"
        })
        const imges = q(".showcase-container img");
        // console.log(imges)
        imges.forEach((img,i)=>{
          imgPara.current = gsap.timeline({
            scrollTrigger: {
              // scroller: "[data-scroll-container]",
              trigger: img,
              start: () => "top bottom",
              end: () => "bottom top",
              scrub: true,
              id:"imgpara"+i,
              // markers:true,
            },
          })
          .fromTo(img,{
            objectPosition:()=> "0 70%",
            // clipPath: "inset(0px 50% 0px 50% round 14rem)",
          },{
            objectPosition:()=> "0 30%",
            ease:"none"
          });
    
        })
        
        fooT.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: q(".footer-sec.fot"),
            start:()=> "top-=8% center-=8%",
            end: ()=> "bottom bottom",
            // markers: true,
            id:"foot",
            onLeaveBack: ({direction})=> changeBg(direction),
          onEnter: ({direction})=> changeBg(direction),
          },
        })
           .to(q(".trig"),{
             autoAlpha:1,
             duration:1,
           }, "<")
          
           return()=>{
            fooT.current.kill()
            if( fooT.current.ScrollTrigger){
              fooT.current.ScrollTrigger.kill();
            }
            // mymb.current.kill();
            // if(tl.current.ScrollTrigger){
            //   tl.current.ScrollTrigger.kill();
            // }
           }
      }
  },[resetLoco, isMobile])
  return (
    <main ref={sl} id="viewport" data-scroll-container>
      <Helmet>
        <title>Services | AM-ARC</title>
        <meta name="description" content="Services of our Design Studio" />
      </Helmet>

        <Serv/>
      <Suspense fallback={ <Loading/> }>
        <ShowcaseServ showcasedata={servData} dataHeight='100vh'/>
        {/* <Con conn={true}/> */}
        {
        !isMobile ? <Footer /> : <FooterMB/>
        }
        {/* <TestingCompo/> */}
      </Suspense>
    </main>
  )
}

export default ServicesPage;
