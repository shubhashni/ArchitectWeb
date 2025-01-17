import React, { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState} from 'react'
import FaqHead from '../components/faqhead.js'
// import QuesBody from '../components/faqbody.js'
// import Con from'../components/contact.js'
// import QSeperator from '../components/QSeperator/QSeperator.js'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLoco from '../utils/useLoco.js';
import {fData, mFData, fSecond} from '../utils/faqData.js'

import { useAppContext } from "../contexts/appcontext.js";
import Loading from "./Loading.js"
import QuesBo from '../components/faqbody.js'
import Helmet from 'react-helmet';

const QuesBody = lazy( () => import('../components/faqbody.js'))
const QSeperator = lazy( () => import('../components/QSeperator/QSeperator.js'))
const Con = lazy( () => import('../components/contact.js'))
const Footer = lazy( () => import('../components/footer.js'))
const FooterMB = lazy( () => import('../components/footermb.jsx'))


// const Loading = lazy( () => import('./Loading.js'))
gsap.registerPlugin(ScrollTrigger);
const FAQPage = () => {
  const el = useRef()
  const q = gsap.utils.selector(el);
  const fooT= useRef();
  const myTl = useRef();
  const mymb= useRef();
  const { isMobile,transition, resetLoco, changePp,changePT, setReset, faqp, setLoading, setVid} = useAppContext();
  useLoco(!isMobile);
  const [ini, setinit] = useState(true)
  useLayoutEffect(()=> {
  
  changePT("other")
  setLoading("loading");

  },[isMobile])

  useEffect(()=>{
    if(!isMobile){
      if(faqp.act === true ) {
        gsap.to(q(".footer-sec.fot"),{
          y: - faqp.pd,
          duration:0
        })
       }
    }
   
  },[faqp.pd])
  useEffect(()=>{
    if (ini) {
      setinit(false)
    } else {
    const elems = q("h3, p .lines, .faqwrapper")
    
    gsap.to(elems,{
      y:-150,
      stagger: .05,
      duration:.69,
      ease: 'power2.in',
    })
  }
  },[transition])

  useEffect(()=>{
       setTimeout(() => {
        setReset()
      }, 100);

    return ()=>{
      // ScrollTrigger.update();
      // ScrollTrigger.getAll().forEach((instance) => {
      //   instance.kill();
      // });
    }
  },[isMobile])

  useEffect(()=>{
    setLoading("loading");
    changePT("other")
    setVid("vid")
    const heading = q(".fHead h3");
    const lines = q(".fHead p .lines");
    const changeBg = (direction)=>{
      gsap.to(q(".backgr"), { 
        autoAlpha: ()=> (direction === 1? 1: 0),
        duration:1
      })
      direction === 1? changePp("Contact"): changePp("other")
    }
    if(!isMobile){
      changePp("other")

     gsap.set(q(".darkLayer"),{
       autoAlpha:0
     });
     const faqdd= q(".faq-grid main");
     var ff = [faqdd[0], faqdd[2],];
     console.log(faqdd);
   
 const fromUp = gsap.to([heading,lines], {
         yPercent: 0,
         delay: 0.3,
         duration: 0.6,
      //  onComplete:()=>ScrollTrigger.refresh(),
          stagger: {
          amount: 0.10,
          ease: "power2.Out",
        },
      });
  
      const fadeIn = gsap.to([heading,lines], {
        autoAlpha: 1,
        duration: 1.2,
        delay: 0.3,
        // onComplete:()=>ScrollTrigger.refresh(),
        stagger: {
          amount: 0.1,
          ease: "power2.Out",
        },
      });
      gsap.to(faqdd,{
        yPercent:0,
        // autoAlpha:1,
        duration:.5,
        delay:.45,
        // stagger:.2,
      });
      gsap.to(faqdd,{
        // yPercent:0,
        autoAlpha:1,
        duration:.9,
        delay:.45,
        // stagger:.2,
      });
  
    myTl.current = gsap.timeline({
      // onComplete: ()=> ScrollTrigger.refresh(),

      scrollTrigger: {
        scroller: "#viewport",
        start: () => "top top",
        end: () => "center top+=10%",
        scrub: 0.25,
        invalidateOnRefresh: true,
        // markers:true,
        // fastScrollEnd: true
      },
    })

    .to(q(".darkLayer"), { autoAlpha: 1,});
    const wrapper = q('.faq-grid')

  
    // gsap.to(wrapper, {
    //        yPercent: 0,
    //        autoAlpha: 1,
    //        delay: 0.55,
    //        duration: 1,
    //        stagger: 0.04,
    //        ease: "power2.out",
    //      });

   
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
         duration:1,
       }, "<");

       
        
      

       return()=>{
        fromUp.kill();
        fadeIn.kill();
        myTl.current.kill();
        if (myTl.current.ScrollTrigger){
          myTl.current.ScrollTrigger.kill()
        }
        fooT.current.kill()
        if( fooT.current.ScrollTrigger){
          fooT.current.ScrollTrigger.kill();
        }
       }
      }
      else if (isMobile){
        const fhead = q(".fHead")
        el.current.style.transform="none";
        gsap.set([el.current, fhead ],{
          clearProps: "transform"
        });
     const faqdd= q(".faq-grid main");
     const fromUp = gsap.to([heading,lines], {
      yPercent: 0,
      delay: 0.4,
      duration: 0.6,
   //  onComplete:()=>ScrollTrigger.refresh(),
       stagger: {
       amount: 0.10,
       ease: "power2.Out",
     },
   });

   const fadeIn = gsap.to([heading,lines], {
     autoAlpha: 1,
     duration: 1.2,
     delay: 0.4,
     // onComplete:()=>ScrollTrigger.refresh(),
     stagger: {
       amount: 0.1,
       ease: "power2.Out",
     },
   });
        // const head = q(".fHead");
        gsap.set(q(".darkLayer"),{
          autoAlpha:0
        })
        gsap.to(faqdd,{
          yPercent:0,
          // autoAlpha:1,
          duration:.5,
          delay:.55,
          // stagger:.2,
        });
        gsap.to(faqdd,{
          // yPercent:0,
          autoAlpha:1,
          duration:.9,
          delay:.55,
          // stagger:.2,
        });

        const layer = q(".m-faq-fade");
        mymb.current = gsap.timeline({
           scrollTrigger:{
             trigger: q(".fHead"),
             start: () => "top top",
             end: () => "center top",
             scrub:true,
             ease:"none",
            //  markers: true,
           },
         })
         .to(q(".m-faq-fade"), {autoAlpha:0 });

         fooT.current = gsap
         .timeline({
           scrollTrigger:{
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
             mymb.current.kill();
             if(mymb.current.ScrollTrigger){
               mymb.current.ScrollTrigger.kill();
             }
            }
       
       }
  },[resetLoco, isMobile,])

  return (
    <main id="viewport" ref={el} data-scroll-container>
      <Helmet>
        <title>AM-ARC | FAQ</title>
        <meta name="description" content="Answers to frequently asked questions" />
      </Helmet>

      <div className="faq-page-content " id="fix-target">

        <FaqHead/>
        {isMobile && <QuesBo fdata={ mFData } isFade={ isMobile } fadeFirst={ !isMobile } foot={false}/>}

        <Suspense fallback={ <Loading/> }>

          {!isMobile && <QuesBody fdata={ fData } isFade={ isMobile } fadeFirst={ !isMobile } foot={false}/>}

          {
            isMobile && <QSeperator/>
          }

          <QuesBody foot={true} fdata={fSecond}/>

        </Suspense>

      </div>

      <Suspense fallback={ () => Loading }>
        {
          !isMobile?   <Footer /> : <FooterMB/>
        }
      
      </Suspense>
      
    </main>
  )
}

export default FAQPage